from django.http import HttpResponse

def home(request):
    return HttpResponse("Ok");


def search(request):
    return HttpResponse("Ok");