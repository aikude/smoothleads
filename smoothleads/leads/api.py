from rest_framework import viewsets, permissions
from .models import Lead
from .serializers import LeadSerializer

#Lead Viewset
class LeadViewset(viewsets.ModelViewSet):
    # pylint: disable=no-member
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer