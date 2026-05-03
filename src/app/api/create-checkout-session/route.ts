import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const prices = {
  pro: process.env.STRIPE_PRICE_PRO!,
  beast: process.env.STRIPE_PRICE_BEAST!,
};

export async function POST(request: NextRequest) {
  try {
    const { tier } = await request.json();

    if (!prices[tier as keyof typeof prices]) {
      return NextResponse.json({ error: 'Invalid tier' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: prices[tier as keyof typeof prices],
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}