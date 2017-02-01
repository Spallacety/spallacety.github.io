def q2():
    valor = int(input("Digite valor: "))
    print("70% de " + str(valor) + ": " + str(int(valor)*0.7))

def q3():
    minutos = int(input("Digite os minutos: "))
    horas = int(minutos/60)
    minutos -= horas*60
    print(str(horas) + " hora(s) e " + str(minutos) + " minuto(s)")

def q4():
    minutos = int(input("Digite os minutos: "))
    horas = int(minutos/60)
    minutos -= horas*60
    print(str(horas) + " hora(s) e " + str(minutos) + " minuto(s)")

def q5():
    velocidade = int(input("Digite velocidade em m/s: "))
    print (str(velocidade*3.6) + " km/h")
    
def q6():
    velocidade = int(input("Digite velocidade em km/h: "))
    print(str(velocidade/3.6) + " m/s")

def q7():
    num1 = int(input("Digite numero 1: "))
    num2 = int(input("Digite numero 2: "))
    print((num1 + num2) / (num1 - num2))

def q8():
    num1 = int(input("Digite numero 1: "))
    num2 = int(input("Digite numero 2: "))
    print ("Quociente: " + str(num1/num2) + ", Resto: " + str(num1%num2));
    num3 = int(input("Digite numero 3: "))
    print (num3)

def q9():
    num = int(input("Digite numero: "))
    print ("Antecessor: " + str(num-1) + ", Sucessor: " + str(num+1))

def q10():
    num = int(input("Digite numero: "))
    print (str(num) + "*3 = " + str(num*3))

def q11():
    nome = input("Digite nome: ")
    endereco = input("Digite endereço: ")
    telefone = input("Digite telefone: ")
    print ("Nome: " + nome + "\nEndereço: " + endereco + "\nTelefone: " + telefone)

def q12():
    n1 = float(input("Numero 1: "))
    n2 = float(input("Numero 2: "))
    n3 = float(input("Numero 3: "))
    n4 = float(input("Numero 4: "))

    mediap = (n1*1 + n2*2 + n3*3 + n4*4) / 10

    print("Media ponderada: %.2f" %mediap)

def q13():
    ano = int(input("Ano de nascimento: "))

    print("Idade: %d" %(2017 - ano))

def q14():
    num = str(input("Digite o numero de 3 digitos: "))
    print(num[1])

def q15():
    num = int(input("Digite numero: "))
    num_inv = str(num)[::-1]
    print (num_inv)

def q16():
    lado = int(input("Digite o lado do quadrado: "))
    perimetro = lado*4
    area = lado**2
    print ("Perimetro: " + str(perimetro) + "\nÁrea : " + str(area))

def q17():
    valor = int(input("Digite o valor do produto: "))
    desconto = float(input("Digite o percentual de desconto: "))
    print("Valor com desconto de " + str(desconto) + "%: R$ " + str(valor*(desconto*0.01)))

def q18():
    a = int(input("Valor de A: "))
    b = int(input("Valor de B: "))

    x = b

    b = a
    a = x

    print("Novo A: %d" %a)
    print("Novo B: %d" %b)

def q19():
    hhmm = str(input("Digite no formato HHMM: "))
    horas = int(hhmm[0,1])*10 + int(hhmm[1])
    minutos = int(hhmm[2])*10 + int(hhmm[3])
    total = horas*60 + minutos
    print("Se passaram %d minutos desde o inicio do dia" %total)
    
def q20():
    valor = int(input("Digite valor a ser sacado: "))
    valorI = valor;
    n100 = int(valor/100)
    valor -= n100*100
    n50 = int(valor/50)
    valor -= n50*50
    n20 = int(valor/20)
    valor -= n20*20
    n10 = int(valor/10)
    valor -= n10*10
    n5 = int(valor/5)
    valor -= n5*5
    n2 = int(valor/2)
    valor -= n2*2
    n1 = int(valor/1)
    valor -= n1*1
    print("O valor R$ %d será dividido em: \n%d notas de R$ 100\n%d notas de R$ 50\n%d notas de R$ 20\n%d notas de R$ 10\n%d notas de R$ 5\n%d notas de R$ 2\n%d notas de R$ 1\n" %(valorI,n100,n50,n20,n10,n5,n2,n1))
