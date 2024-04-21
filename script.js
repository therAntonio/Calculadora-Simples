function calcular(i1, i2){
    i1 = parseFloat(document.getElementById('i1').value) 
    i2 = parseFloat(document.getElementById('i2').value)

    selector = document.getElementById('selector').value

    switch(selector){
        case '+':
            calculo = (i1 + i2)
            document.getElementById('result').innerHTML = 'O resultado da soma é ' + calculo
        break

        case '-':
            calculo = (i1 - i2)
            document.getElementById('result').innerHTML = 'O resultado  da subtração é ' + calculo
        break

        case '/':
            calculo =Math.round((i1 / i2))
            if(Number.isNaN(calculo)){
                document.getElementById('result').innerHTML = 'Insira um divisível válido'
            }else{
                document.getElementById('result').innerHTML = 'O resultado  da divisão é ' + calculo
            }
        break

        case '*':
            calculo = (i1 * i2)
            document.getElementById('result').innerHTML = 'O resultado  da multiplicação é ' + calculo
        break
    }
}

