import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  public discussions = [
    {
      subject:'Assunto da pergunta aparece aqui',
      author:'Carlos Henrique Santos',
      message:'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...',
      likes:1,
      liked:false,
      replies:[
          {
            name:'Adriano da Silva',
            message:'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
            role:1
          }
      ]
    },
    {
      subject:'algum assunto',
      author:'Carlos Henrique Santos',
      message:'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?',
      likes:4,
      liked:false,
      replies:[
          {
            name:'Adriano da Silva',
            message:'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
            role:1
          },
          {
            name:'Carlos Henrique Santos',
            message:`Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.

            Obrigada pela resposta, muito interessante o seu trabalho! `,
            role:0
          },
          {
            name:'Carmila Ferreira Andrade',
            message:`Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.

            Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.`,
            role:2
          },
          {
            name:'Ana Carolina',
            message:`Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.`,
            role:2
          },

      ]
    },
  ]

  constructor() { }
}
