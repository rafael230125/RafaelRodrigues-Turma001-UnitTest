// Importa a classe para os testes
const analiseDados = require('../src/analisardadosDeDados.js');

describe('analisardadosDeDados', () => {
  let analisardados;

  beforeEach(() => {
    analisardados = new analiseDados();
  });

  test('deve inicializar com dados vazios', () => {
    expect(analisardados.dados).toEqual([]);
  });

  test('deve adicionar novos dados corretamente', () => {
    analisardados.adicionarDados([1, 2, 3]);
    expect(analisardados.dados).toEqual([1, 2, 3]);
  });

  test('deve lançar erro se adicionarDados não receber um array', () => {
    expect(() => analisardados.adicionarDados(123)).toThrow('Os dados devem ser um array.');
  });

  test('deve limpar os dados corretamente', () => {
    analisardados.adicionarDados([1, 2, 3]);
    analisardados.limparDados();
    expect(analisardados.dados).toEqual([]);
  });

  test('deve ordenar os dados corretamente', () => {
    analisardados.adicionarDados([5, 3, 8, 1]);
    expect(analisardados.ordenarDados()).toEqual([1, 3, 5, 8]);
  });

  test('deve calcular a média corretamente', () => {
    analisardados.adicionarDados([1, 2, 3, 4, 5]);
    expect(analisardados.calcularMedia()).toBe(3);
  });

  test('deve retornar null ao calcular a média se não houver dados', () => {
    expect(analisardados.calcularMedia()).toBeNull();
  });

  test('deve calcular a mediana corretamente com número ímpar de elementos', () => {
    analisardados.adicionarDados([1, 2, 3, 4, 5]);
    expect(analisardados.calcularMediana()).toBe(3);
  });

  test('deve calcular a mediana corretamente com número par de elementos', () => {
    analisardados.adicionarDados([1, 2, 3, 4]);
    expect(analisardados.calcularMediana()).toBe(2.5);
  });

  test('deve retornar null ao calcular a mediana se não houver dados', () => {
    expect(analisardados.calcularMediana()).toBeNull();
  });

  test('deve calcular a moda corretamente', () => {
    analisardados.adicionarDados([1, 2, 2, 3, 4, 4, 4]);
    expect(analisardados.calcularModa()).toEqual([4]);
  });

  test('deve retornar null ao calcular a moda se não houver dados', () => {
    expect(analisardados.calcularModa()).toBeNull();
  });

  test('deve calcular a variância corretamente', () => {
    analisardados.adicionarDados([1, 2, 3, 4, 5]);
    expect(analisardados.calcularVariancia()).toBe(2);
  });

  test('deve retornar null ao calcular a variância se não houver dados', () => {
    expect(analisardados.calcularVariancia()).toBeNull();
  });

  test('deve calcular o desvio padrão corretamente', () => {
    analisardados.adicionarDados([1, 2, 3, 4, 5]);
    expect(analisardados.calcularDesvioPadrao()).toBeCloseTo(1.414, 3);
  });

  test('deve retornar null ao calcular o desvio padrão se não houver dados', () => {
    expect(analisardados.calcularDesvioPadrao()).toBeNull();
  });

  test('deve encontrar o valor mínimo corretamente', () => {
    analisardados.adicionarDados([5, 3, 8, 1]);
    expect(analisardados.encontrarMinimo()).toBe(1);
  });

  test('deve retornar null ao encontrar o valor mínimo se não houver dados', () => {
    expect(analisardados.encontrarMinimo()).toBeNull();
  });

  test('deve encontrar o valor máximo corretamente', () => {
    analisardados.adicionarDados([5, 3, 8, 1]);
    expect(analisardados.encontrarMaximo()).toBe(8);
  });

  test('deve retornar null ao encontrar o valor máximo se não houver dados', () => {
    expect(analisardados.encontrarMaximo()).toBeNull();
  });

  test('deve normalizar os dados corretamente', () => {
    analisardados.adicionarDados([1, 2, 3, 4, 5]);
    expect(analisardados.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1]);
  });

  test('deve calcular o percentil corretamente', () => {
    analisardados.adicionarDados([1, 2, 3, 4, 5]);
    expect(analisardados.calcularPercentil(50)).toBe(3);
  });

  test('deve retornar null ao calcular o percentil com dados inválidos', () => {
    expect(analisardados.calcularPercentil(110)).toBeNull();
    expect(analisardados.calcularPercentil(-10)).toBeNull();
    expect(analisardados.calcularPercentil(50)).toBeNull();
  });

  test('deve calcular a soma corretamente', () => {
    analisardados.adicionarDados([1, 2, 3, 4, 5]);
    expect(analisardados.calcularSoma()).toBe(15);
  });

  test('deve calcular o produto corretamente', () => {
    analisardados.adicionarDados([1, 2, 3]);
    expect(analisardados.calcularProduto()).toBe(6);
  });

  test('deve calcular a amplitude corretamente', () => {
    analisardados.adicionarDados([1, 2, 3, 4, 5]);
    expect(analisardados.calcularAmplitude()).toBe(4);
  });

  test('deve calcular o coeficiente de variação corretamente', () => {
    analisardados.adicionarDados([1, 2, 3, 4, 5]);
    expect(analisardados.calcularCoeficienteVariacao()).toEqual(41.421, 3);
  });

  test('deve remover os outliers corretamente', () => {
    analisardados.adicionarDados([1, 2, 3, 4, 5, 100]);
    analisardados.removerOutliers();
    expect(analisardados.dados).toEqual([1, 2, 3, 4, 5]);
  });

});

