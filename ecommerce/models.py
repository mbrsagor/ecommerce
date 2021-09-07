from django.db import models
from eshop.models import Product


# order by user
class Order(models.Model):
    full_name = models.CharField(max_length=60)
    phn_number = models.CharField(max_length=14)
    email = models.EmailField()
    address = models.CharField(max_length=150)
    postal_code = models.CharField(max_length=30)
    city = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    paid = models.BooleanField(default=False)

    class Meta:
        ordering = ('-created',)

    def __str__(self):
        return 'Order {}'.format(self.id)

    def get_total_cost(self):
        return sum(item.get_cost() for item in self.items.all())


# order Item list
class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='order_items', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(default=1)
    created = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return '{}'.format(self.id)

    def get_cost(self):
        return self.price * self.quantity


# dashboard site note views
class SiteNote(models.Model):
    note_title = models.CharField(max_length=70)
    note_body = models.TextField()
    nodte_date = models.DateField()

    def __str__(self):
        return self.note_title
