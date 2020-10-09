from django.shortcuts import render
from django.http import HttpResponse
import stripe
from rest_framework.decorators import api_view
from rest_framework.response import Response

import math

# Create your views here.

@api_view(["POST"])
def Create(request):

    total = request.GET['Total']
    print(math.floor(float(total)))
    stripe.api_key = 'sk_test_51HY6RsEGtwdHixqFoSJr7uCVNDzKoZkQFamqzKwvop2wqavl2cCoqh4khFyn4csYS4rzy8g2f5qUa6VrByuOkOFf00c0VmvzgO'
    paymentIntent = stripe.PaymentIntent.create(
        amount=math.floor(float(total)),
        currency="usd",
    )
    print(paymentIntent)
    data = {
        'clientSecret': paymentIntent['client_secret']
    }
    print(total)
    return Response(data=data, status=201, )



