def q1():
    try:
        quant_paes = int(input("Digite a quantidade de paes: "))
        quant_broas = int(input("Digite a quantidade de broas: "))

        total = (quant_paes * 0.12) + (quant_broas * 1.5)
        valor_poupanca = total * 0.9

        print("O total arrecardado com a vendas de pães e broas foram: %.2f " %total)
        print("Valor para poupança: %.2f" %valor_poupanca)
    except:
        print("Digite somente números")
        calculoPoupanca()
        
def q2():
    try:
        quant_p = int(input("Quantidade de camisas P: "))
        quant_m = int(input("Quantidade de camisas M: "))
        quant_g = int(input("Quantidade de camisas G: "))

        total = (quant_p * 10) + (quant_m * 12) + (quant_g * 15)

        print("Valor Total: %.2f " %total)
    except:
        print("Digite somente números")
        vendaCamisa()

def q3():
    valor_total = float(input("Valor da Conta: "))

    divisao = int(valor_total / 3) 
    resto = valor_total % 3
    valorCarlos = divisao + resto 
 
    print("Carlos paga %.2f, André paga %.2f, Felipe paga %.2f  " %(divisao, divisao, valorCarlos))     

def q4():
    quant = int(input("Quantidade de sanduiches: "))

    quant_queijo = (quant * 50)/1000
    quant_presunto = (quant * 50)/1000
    quant_carne = (quant * 100)/1000
 
    print("Para fazer essa quantidade de sanduiche precisara de: ")
    print("%.3f quilos de queijo " %(quant_queijo))
    print("%.3f quilos de presunto " %(quant_presunto))
    print("%.3f quilos de carne " %(quant_carne))

def q5():
    horas_normal = int(input("Quantidade de horas normais trabalhadas: "))
    horas_extra = int(input("Quantidade de horas extra trabalhadas: "))

    valor_bruto = (horas_normal * 10) + (horas_extra *15)
    valor_liquido = valor_bruto * 0.9
    
    print("Salário bruto: %.2f" %(valor_bruto))
    print("Salário liquido: %.2f" %(valor_liquido))


def q6():
    quant = int(input("Quantidade de frangos: "))

    chip_identificacao = (quant * 4)
    chip_alimentacao = (quant * 2 * 3.5)
    
    print("Valor total do chip de identificação: %.2f" %(chip_identificacao))
    print("Valor total do chip de alimentacao: %.2f" %(chip_alimentacao))
    print("Somatorio: %.2f" %(chip_identificacao + chip_alimentacao))

def q7():
    quant360l = int(input("Quantidade de garrafas de 360ml: "))
    quant600l = int(input("Quantidade de garrafas de 600ml: "))
    quant2l = int(input("Quantidade de garrafas de 2L: "))

    total = ((quant360l * 360)/ 1000 + (quant600l * 600)/ 1000) + quant2l

    
    print("A quantidade total de litros é: %.2f" %total)


def q8():
    quant01 = int(input("Quantidade de moedas de 0,01 centavos:"))
    quant05 = int(input("Quantidade de moedas de 0,05 centavos:"))
    quant10 = int(input("Quantidade de moedas de 0,10 centavos:"))
    quant25 = int(input("Quantidade de moedas de 0,25 centavos:"))
    quant50 = int(input("Quantidade de moedas de 0,50 centavos:"))
    quant1 = int(input("Quantidade de moedas de 1 real:"))

    valor_quebrados = ((quant01 * 0.01) + (quant05 * 0.05) + (quant10 * 0.1) + (quant25 * 0.25) + (quant50 * 0.5))
    valor_real = quant1 + valor_quebrados

    print("A quantidade economizada em reis é %.2f" %valor_real)

def q9():
    altura = float(input("Digite sua altura: "))
    sombra_altura = float(input("Digite o tamanho da sua sombra:"))
    sombra_predio = float(input("Digite o tamanho da sobra do predio:"))
    x = (altura * sombra_predio)/sombra_altura
    print("O tamanho do predio é %d" %x)

def q10(salario, divida1, divida2):
    divida1 += divida1 *0.02
    divida2 += divida2 * 0.02

    sobra = salario - divida1 - divida2

    print("Restará R$ %.2f " %sobra)
    

    



