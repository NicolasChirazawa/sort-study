<div align=center>
  <img src="https://img.shields.io/static/v1?label=%20&labelColor=fffdaf&message=Javascript&color=grey&style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/static/v1?label=%20&labelColor=d1ffbd&message=Node.JS&color=grey&style=for-the-badge&logo=node.js&logoColor=black"/>
  <img src="https://img.shields.io/static/v1?label=%20&labelColor=white&message=Express.JS&color=grey&style=for-the-badge&logo=express&logoColor=black"/> <br>
</div> <br>

<div align="center">
 • <a href=#descricao>Descrição</a> • <a href=#endpoint>Endpoint API</a> • <a href=#inicializar>Inicializando API</a> • <a href=#endpoint>Endpoint API</a> •
</div>

<h2 name="descricao">📚 Descrição</h2>
Um estudo comparativo entre algortimos de ordenação de números.

<h3>Funcionalidades</h3>
<h4>Front-end:</h4>
• Plotação de resultados num gráfico comparativo; <br>

<h4>API:</h4>
• Geração de 'x' lista de 'y' números pseudoaleatórios; <br>
• Teste de performance sobre média de lista por algoritmo: <br> <br>

* 'Bubble Sort';
* 'Insert Sort';
* 'Select Sort';
* 'Merge Sort';
* 'Quick Sort';
* 'Bucket Sort';
* 'Count Sort';
* 'Radix Sort';
* 'Heap Sort';


<h2 name="visual">🖥️ Front-end</h2>
O projeto tem essa disposição visual: <br> <br>

<img src="https://raw.githubusercontent.com/NicolasChirazawa/sort-study/refs/heads/main/imagens/Screenshot_1.png">

* <strong>Quantidade de listas</strong>: Base de listas que será utilizado para realizar a média de performances;
* <strong>Quantidade de números</strong>: Quantidade de números por lista;
* <strong>Tipo de algoritmo</strong>: Algoritmo que será usado para o teste de performance por ordenação;
<br>

<em>* Também é possível gerar as listas de números na mão com separação via ',' para números e '/' para listas;</em>

<h2 name="inicializar">🚀 Inicializando API</h2>
Passos para utilizar este projeto: <br>

<div align="center"><h6> / Instalação do projeto / Instalações dos Softwares / Inicialização /</h6></div>

<h3>Instalação do projeto</h3>

Clone o projeto ou <a href="https://github.com/NicolasChirazawa/sort-study/archive/refs/heads/main.zip">baixe-o</a>; <br>

```
gh repo clone NicolasChirazawa/sort-study
```

<h3>Softwares necessários</h3>

<h6>Recomendação: Um editor de código: <a href="https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user">Visual Studio Code</a>; </h6>
<h6>Recomendação: Um Cliente API para manejar requisições, como o: <a href="https://dl.pstmn.io/download/latest/win64">Postman</a> 
  ou o <a href="https://updates.insomnia.rest/downloads/windows/latest?app=com.insomnia.app">Insomnia</a>; </h6>

<h3>Inicialização</h3>

```
npm start
```
<h2 name="endpoint">📍 Endpoints API</h2>

| rotas                                                          | descrição                              |
| -------------------------------------------------------------- | :--------------------------------------:
| `POST /v1/generateRandomNumbers/:quantityList/:quantityNumber` | Gerar lista de números aleatórios.     |
| `POST /v1/sortLists/:algorithm_name`                           | Performar média de tempo da ordenação. |
