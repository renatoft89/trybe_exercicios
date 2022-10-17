import numbers


def media(list):
  soma = 0
  for valor in list:
    soma += valor
  return soma / len(list)
