from django.db import models

# Create your models here.

class Cliente(models.Model):
  cpf = models.CharField(max_length=20)
  nome = models.CharField(max_length=30)
  endereco = models.CharField(max_length=35)
  complemento = models.CharField(max_length=50)
  cidade = models.CharField(max_length=25)
  estado = models.CharField(max_length=2)
  cep = models.CharField(max_length=8)
  foneResidencial = models.CharField(max_length=15)
  foneTrabalho = models.CharField(max_length=15)
  rendaFamiliar = models.DecimalField(max_digits=10,decimal_places=2)
  email = models.CharField(max_length=50)

  def __str__(self):
    return self.nome

  def getAll():
    return Cliente.objects.all()

class Fornecedor(models.Model):
  cnpj = models.CharField(max_length=20)
  nome = models.CharField(max_length=30)
  endereco = models.CharField(max_length=35)
  complemento = models.CharField(max_length=50)
  cidade = models.CharField(max_length=25)
  estado = models.CharField(max_length=2)
  cep = models.CharField(max_length=8)
  fone = models.CharField(max_length=15)
  responsavel = models.CharField(max_length=30)
  website = models.CharField(max_length=80)

  def __str__(self):
    return self.nome

class Produto(models.Model):
  nome = models.CharField(max_length=35)
  quantidade = models.IntegerField()
  minQuantidade = models.IntegerField()

  def __str__(self):
    return self.nome

  def onEstoqueMinimo():
    for produto in Produto.objects.all():
      minimo = produto.minQuantidade
      return Produto.objects.filter(quantidade = minimo)

class Venda(models.Model):
  data = models.DateTimeField()
  valorTotal = models.DecimalField(max_digits=10,decimal_places=2)
  cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)

  def __str__(self):
    return "Venda para %s, Valor: R$ %.2f" %(self.cliente.nome, self.valorTotal)

  def getVendaCliente(_cliente):
    return Venda.objects.filter(cliente = _cliente)

class ItemVenda(models.Model):
  venda = models.ForeignKey(Venda, on_delete=models.CASCADE)
  produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
  precoUnitario = models.DecimalField(max_digits=10,decimal_places=2)
  quantidade = models.IntegerField()

  def __str__(self):
    return "Venda: %d, Produto: %s, Preco Unitario: R$ %.2f, Quantidade: %d" %(self.venda.id, self.produto.nome, self.precoUnitario, self.quantidade)

class Pedido(models.Model):
  dataPedido = models.DateTimeField()
  dataRecebimento = models.DateTimeField()
  precoTotal = models.DecimalField(max_digits=10,decimal_places=2)
  fornecedor =  models.ForeignKey(Fornecedor, on_delete=models.CASCADE)

  def __str__(self):
    return "Fornecedor: %s, Valor: R$ %.2f" %(self.fornecedor.nome, self.precoTotal)

  def getPedido(_id):
    return Pedido.objects.filter(id = _id)

class ItemPedido(models.Model):
  pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
  produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
  precoUnitario = models.DecimalField(max_digits=10,decimal_places=2)
  quantidade = models.IntegerField()

  def __str__(self):
    return "Pedido: %d, Produto: %s, Preco Unitario: R$ %.2f, Quantidade: %d" %(self.pedido.id, self.produto.nome, self.precoUnitario, self.quantidade)

  def getItensFromPedido(_pedido):
    return ItemPedido.objects.filter(pedido = _pedido)