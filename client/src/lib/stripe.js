import Stripe from 'stripe'

const stripe = Stripe("pk_test_51P39IzP8IoGwtqbKqIeramMSFdp0ilGhJFk8bazsHyu0nVubsGVBufk6KNJQGCvjTmdswr1g5iFeW6PTzaMWUxVF002aJvNHTF",);

export default async function handler(req,res) {
    if(req.method === 'POST' {
        try {
            
        } catch (error) {
            res.status(500).json({ statusCode: 500, message: error.message})
        }
    })
}