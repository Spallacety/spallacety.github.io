from django.contrib import admin

# Register your models here.

from .models import *

class ClienteAdmin(admin.ModelAdmin):
  list_display = ('nome', 'cpf', 'email')

class FornecedorAdmin(admin.ModelAdmin):
  list_display = ('nome', 'cnpj', 'website')

class ProdutoAdmin(admin.ModelAdmin):
  list_display = ('nome', 'quantidade')

class VendaAdmin(admin.ModelAdmin):
  list_display = ('cliente', 'data', 'valorTotal')

class ItemVendaAdmin(admin.ModelAdmin):
  list_display = ('venda', 'produto', 'precoUnitario', 'quantidade')

class PedidoAdmin(admin.ModelAdmin):
  list_display = ('fornecedor', 'dataPedido', 'precoTotal')

class ItemPedidoAdmin(admin.ModelAdmin):
  list_display = ('pedido', 'produto', 'precoUnitario', 'quantidade')

admin.site.register(Cliente, ClienteAdmin)
admin.site.register(Fornecedor, FornecedorAdmin)
admin.site.register(Produto, ProdutoAdmin)
admin.site.register(Venda, VendaAdmin)
admin.site.register(ItemVenda, ItemVendaAdmin)
admin.site.register(Pedido, PedidoAdmin)
admin.site.register(ItemPedido, ItemPedidoAdmin)