import { Component } from '@angular/core';

interface Produto {
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
  imagem: string;
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  produtos: Produto[] = [
    { nome: 'Canarinho Vermelho', preco: 99.99, descricao: 'Odeia porcos', emEstoque: true, imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJO341fxUSAVDZ5DmtGD3pi0VZfG5VXeEbze41tjmWhBoDwUM7pzeWFdMNIfEujDocGt3_TSAbSrEaRkvvZcZtDRdHhquK6JQpBneGRcm9zGwTnvZ5mQtzzrF6Nv-toMzumVYfs4e2opI/s1600/ang.jpg'  },
    { nome: 'Raposa Minecraft', preco: 76.76, descricao: 'Come esmeraldas', emEstoque: false, imagem: 'https://cdn.ligadosgames.com/imagens/como-domesticar-raposa-llama-cavalo-minecraft-og.jpg?class=ogImageSquare'  },
    { nome: 'Coruja molhada', preco: 33.33, descricao: 'É molhada', emEstoque: true, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_vnY-aES6ZYyA9rlQlMNaW4hkhVNx0eIyA&s'  },
  ];
}
