# import the serializers module from rest_framework
from rest_framework import serializers

from authentication.models import User


class UserDetailSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'username', 'name', 'email', 'image')

    def get_name(self, obj):
        if obj.first_name == "" or obj.last_name == "":
            return obj.username
        return obj.first_name + " " + obj.last_name
