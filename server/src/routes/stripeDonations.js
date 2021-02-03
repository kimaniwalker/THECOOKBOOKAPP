import { Router } from 'express';
import { charge } from '../utils/stripeCharge'
import stripeLoader from 'stripe';
import { config } from '../config';
require('isomorphic-fetch');
const stripe = stripeLoader(config.STRIPE_SK);

let router = Router();

/* RETRIEVE STRIPE BALANCE */
function retrieve(err, balance) {
  // returning a promise, so when we call .retrieveBalance elsewhere, we will use await
  return stripe.balance
    .retrieve({
      api_key: config.STRIPE_SK,
    })
    .then((balance) => {
      // The balance object for the connected account
      let balanceObject = balance;
      console.log('here', balanceObject);
      return balance;
    })
    .catch((err) => {
      // Error
      console.log(err);
    });
};

router.get('/', async (req, res) => {
  try {
    let balance = await retrieve();
    res.json({ balance });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Fetch the Checkout Session to display the JSON result on the success page
router.get('/checkout-session', async (req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
});




router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    customer: req.body.customer_id,
    client_reference_id: req.body.customer_id,

    line_items: [
      {
        price: req.body.priceid,
        quantity: 1,
        description: req.body.description,
      },
    ],
    mode: req.body.mode,
    success_url: `https://still-hamlet-66612.herokuapp.com/login`,
    cancel_url: `https://still-hamlet-66612.herokuapp.com/`,
  });

  res.json({ id: session.id });
});


router.post('/customer-portal', async (req, res) => {
  const session = await stripe.billingPortal.sessions.create({
    customer: req.body.customer,
    return_url: req.body.return_url,
  });

  console.log(session);
  res.json(session);

});


router.post('/create-customer', async (req, res) => {
  const customer = await stripe.customers.create({
    description: 'API',
    address: {
      city: req.body.address.city,
      state: req.body.address.state,
      line1: req.body.address.line1,
      postal_code: req.body.address.postal_code
    },
    metadata: {
      id: req.body.metadata.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name
    },
    email: req.body.email,
    phone: req.body.phone,
    name: req.body.first_name + ' ' + req.body.last_name


  });

  console.log(customer);
  res.json(customer);

});

router.post('/getCustomer', async (req, res) => {

  
    const customer = await stripe.customers.retrieve(
      req.body.customer_id , {
        expand: ['subscriptions']
      }
    );

    console.log(customer)
    console.log(customer.address.city)
    res.json(customer)

});




router.post('/webhooks', async (req, res) => {
  let event;

  try {
    event = req.body;
    console.log(event);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event;
      console.log(paymentIntent)
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'customer.subscription.created':
      const newSubscription = event;
      console.log(newSubscription);
      break;

    case 'customer.subscription.updated':
      const updatedSubscription = event;
      console.log(updatedSubscription);
      break;

    case 'invoice.paid':
      const invoicePaid = event;
      console.log(invoicePaid);
      break;

    case 'invoice.payment_action_required':
      const invoiceRequiredAction = event;
      console.log(invoiceRequiredAction);
      break;

    case 'invoice.payment_failed':
      const invoiceFailed = event;
      console.log(invoiceFailed);
      break;

    case 'invoice.payment_succeeded':
      const invoiceSuccess = event;
      console.log(invoiceSuccess);
      break;

    case 'subscription_schedule.aborted':
      const paymentLate = event;
      console.log(paymentLate);

      break;

    case 'subscription_schedule.canceled':
      const subscriptionCancelled = event;
      console.log(subscriptionCancelled);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  res.json({ received: true });
});


export default router;