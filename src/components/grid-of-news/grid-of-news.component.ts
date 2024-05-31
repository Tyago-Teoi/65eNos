import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MaterialModule} from '../../app/material.module';
import {MatCardModule} from '@angular/material/card';
import { CardNewsComponent } from '../card-news/card-news.component';
import { Dir } from '@angular/cdk/bidi';

export interface NewsDto {
  image: string
  image_alt: string
  title: string
  subtitle: string
  summary: string
  content: string
}

@Component({
  selector: 'app-grid-of-news',
  templateUrl: './grid-of-news.component.html',
  styleUrls: ['./grid-of-news.component.scss'],
  standalone: true,
  imports: [MaterialModule, CardNewsComponent]
})
export class GridOfNewsComponent implements OnInit {
  

  newsList: NewsDto[] = [
    {
      image: '../../assets/image/News01.webp',
      image_alt: 'Uma pessoa idosa está sentada confortavelmente em uma sala de estar acolhedora, olhando para um smartphone que mostra um aplicativo de gerenciamento de medicamentos. O aplicativo exibe um cronograma de medicamentos com lembretes. Sobre a mesa ao lado dela, há um copo de água e um organizador de comprimidos. A sala está bem iluminada com uma iluminação quente e há fotos de família e plantas ao fundo, criando um ambiente acolhedor e seguro.',
      title: 'Tecnologia facilita a vida dos idosos',
      subtitle: 'Aplicativos ajudam na organização de medicamentos',
      summary: 'Aplicativos de celular estão se tornando aliados importantes para idosos que precisam administrar diversos medicamentos diariamente. Essas ferramentas ajudam a lembrar horários e dosagens, proporcionando mais segurança e autonomia.',
      content: 'Com o avanço da tecnologia, aplicativos de celular estão se tornando essenciais na vida dos idosos. Ferramentas como "Medisafe" e "MyTherapy" auxiliam na organização dos medicamentos, enviando alertas sobre horários e dosagens. Esses aplicativos permitem que os idosos ou seus cuidadores registrem todos os medicamentos, ajustem lembretes personalizados e até recebam notificações sobre possíveis interações entre remédios. Isso proporciona mais segurança e autonomia aos idosos, que podem gerenciar melhor sua saúde. Além disso, muitas dessas ferramentas oferecem funcionalidades adicionais, como registro de sintomas, acompanhamento de pressão arterial e glicemia, e até comunicação direta com profissionais de saúde.O uso dessas tecnologias representa um avanço significativo na qualidade de vida da terceira idade, garantindo que os tratamentos sejam seguidos corretamente e reduzindo o risco de complicações devido a esquecimentos.'
    },
    {
      image: '../../assets/image/News02.webp',
      image_alt: 'Um grupo de idosos está praticando yoga em um parque sereno. Eles estão realizando poses de yoga suaves sobre tapetes dispostos na grama, com um instrutor calmo e focado guiando-os. O ambiente é pacífico, com vegetação exuberante, árvores e um céu azul claro. O grupo parece relaxado e engajado, com sorrisos e um senso de comunidade.',
      title: 'Atividade física na terceira idade',
      subtitle: 'Yoga se destaca como uma opção benéfica',
      summary: 'A prática de yoga tem se mostrado altamente benéfica para idosos, contribuindo para a melhoria da flexibilidade, equilíbrio e saúde mental. Muitos grupos e academias oferecem aulas específicas para essa faixa etária.',
      content: 'A prática de yoga tem ganhado popularidade entre os idosos, e por bons motivos. Essa atividade física não só ajuda a manter a flexibilidade e o equilíbrio, essenciais para a prevenção de quedas, mas também traz benefícios significativos para a saúde mental, como redução do estresse e da ansiedade. Diversas academias e centros comunitários têm adaptado suas aulas para atender às necessidades da terceira idade, com exercícios focados em alongamento suave, respiração profunda e meditação. Essas adaptações garantem que a prática seja segura e acessível para todos. Pesquisas mostram que o yoga pode melhorar a qualidade do sono, fortalecer os músculos e até mesmo reduzir dores crônicas, comuns nessa faixa etária. Além disso, a prática em grupo proporciona uma excelente oportunidade de socialização. Para aqueles que preferem praticar em casa, há muitos recursos online, incluindo vídeos e aplicativos, que oferecem instruções detalhadas e seguras para iniciantes.'
    },
    {
      image: '../../assets/image/News03.webp',
      image_alt: 'Um grupo de idosos socializando em um animado centro comunitário. Eles estão envolvidos em várias atividades, como jogar jogos de tabuleiro, conversar e participar de um workshop de artesanato. O ambiente é alegre, com decorações coloridas, grandes janelas que deixam entrar luz natural e um senso de camaradagem. Todos parecem felizes e engajados, criando uma atmosfera vibrante e acolhedora.',
      title: 'A importância da socialização na terceira idade',
      subtitle: 'Clubes de convivência promovem interação e bem-estar',
      summary: 'A socialização é fundamental para o bem-estar dos idosos. Clubes de convivência e grupos comunitários oferecem atividades variadas que promovem a interação social e ajudam a combater a solidão.',
      content: 'Manter uma vida social ativa é crucial para o bem-estar dos idosos. Estudos mostram que a socialização regular pode melhorar a saúde mental, reduzir sentimentos de solidão e até aumentar a longevidade. Clubes de convivência e grupos comunitários desempenham um papel vital nesse contexto. Eles oferecem uma variedade de atividades, desde aulas de dança e artesanato até jogos de mesa e passeios em grupo. Essas atividades não só entretêm, mas também promovem a interação social e a formação de novas amizades. A participação em tais grupos tem mostrado efeitos positivos na saúde mental dos idosos, ajudando a combater a depressão e a ansiedade. Além disso, o engajamento em atividades sociais pode melhorar a autoestima e proporcionar um senso de propósito. Para aqueles que não têm acesso fácil a esses clubes, muitos municípios estão investindo em programas de transporte gratuito ou a preços acessíveis, garantindo que todos possam participar e usufruir dos benefícios da socialização.'
    },
    {
      image: '../../assets/image/News04.webp',
      image_alt: 'Uma pessoa idosa em uma cozinha moderna preparando uma refeição saudável. A cozinha é luminosa e limpa, com frutas e vegetais frescos no balcão. A pessoa idosa está cortando vegetais e sorrindo, mostrando um senso de prazer e bem-estar. Há utensílios de cozinha e ingredientes organizadamente dispostos, criando um ambiente organizado e convidativo.',
      title: 'Alimentação saudável para idosos',
      subtitle: 'Dicas para uma dieta balanceada na terceira idade',
      summary: 'Manter uma dieta saudável é essencial para os idosos. Comer uma variedade de alimentos ricos em nutrientes pode ajudar a manter a energia e a prevenir doenças crônicas.',
      content: 'A alimentação saudável é um dos pilares para uma vida longa e de qualidade, especialmente na terceira idade. Com o passar dos anos, as necessidades nutricionais mudam, e é importante adaptar a dieta para garantir a ingestão adequada de nutrientes essenciais. Os especialistas recomendam uma dieta rica em frutas, legumes, cereais integrais e proteínas magras. Esses alimentos fornecem vitaminas e minerais importantes que ajudam a manter a energia, fortalecer o sistema imunológico e prevenir doenças crônicas como diabetes e hipertensão. Além disso, é fundamental manter-se hidratado. O consumo adequado de água é crucial para a saúde dos idosos, ajudando na digestão, na circulação sanguínea e na regulação da temperatura corporal. Outra dica importante é evitar o consumo excessivo de sal e açúcar, que podem contribuir para problemas de saúde como hipertensão e diabetes. Optar por temperos naturais e reduzir a ingestão de alimentos processados são práticas recomendadas. A consulta regular com um nutricionista pode ajudar a personalizar a dieta conforme as necessidades individuais, garantindo uma alimentação equilibrada e saudável.'
    },
    {
      image: '../../assets/image/News05.webp',
      image_alt: 'Um grupo diversificado de idosos em uma clínica ou centro de saúde comunitário, recebendo vacinas. O grupo inclui pessoas de diferentes origens étnicas, como negros, asiáticos, indígenas, e algumas com deficiências. Uma enfermeira está administrando uma vacina a uma pessoa idosa, enquanto outros aguardam sua vez, sorrindo e conversando. O ambiente é limpo e bem organizado, com pôsteres sobre vacinação nas paredes e um senso de segurança e comunidade.',
      title: 'Importância da vacinação na terceira idade',
      subtitle: 'Vacinas protegem contra doenças graves',
      summary: 'A vacinação é crucial para proteger os idosos contra doenças graves, como gripe e pneumonia. Manter o calendário de vacinas em dia é uma das melhores formas de garantir a saúde na terceira idade.',
      content: 'A vacinação é uma medida preventiva essencial para a saúde dos idosos. Com o envelhecimento, o sistema imunológico enfraquece, tornando o corpo mais suscetível a infecções e doenças graves. Manter o calendário de vacinas em dia pode prevenir muitas dessas doenças. Vacinas como a da gripe e da pneumonia são particularmente importantes. A gripe pode ser especialmente perigosa para os idosos, levando a complicações sérias como pneumonia. A vacinação anual contra a gripe é recomendada para todos os idosos. Além disso, vacinas contra doenças como herpes-zóster e tétano também são importantes. A herpes-zóster, ou cobreiro, pode causar dor intensa e complicações sérias em idosos, enquanto o tétano, embora raro, é uma infecção grave que pode ser prevenido com vacinação. Os profissionais de saúde recomendam que os idosos consultem regularmente seus médicos para manter as vacinas atualizadas. Muitos centros de saúde e clínicas oferecem vacinas gratuitamente ou a preços reduzidos para a terceira idade. A vacinação não só protege os indivíduos, mas também ajuda a prevenir a disseminação de doenças na comunidade, contribuindo para a saúde pública geral.'
    },
    {
      image: '../../assets/image/News06.webp',
      image_alt: 'Um grupo diversificado de idosos aproveitando as férias em um resort de praia. O grupo inclui pessoas de diferentes origens étnicas, como negros, asiáticos, indígenas, e algumas com deficiências. Eles estão envolvidos em várias atividades, como caminhar na praia, sentar sob guarda-sóis e brincar na areia. O cenário é vibrante, com céu azul claro, ondas suaves e um senso de alegria e relaxamento.',
      title: 'Viagens e turismo na terceira idade',
      subtitle: 'Destinos populares e seguros para idosos',
      summary: 'Viajar na terceira idade pode ser uma experiência enriquecedora e segura. Destinos turísticos adaptados oferecem conforto e acessibilidade, permitindo que os idosos aproveitem ao máximo suas viagens.',
      content: 'Viajar na terceira idade é uma ótima maneira de explorar novos lugares, conhecer culturas diferentes e desfrutar de novas experiências. Com o aumento da expectativa de vida, muitos idosos estão aproveitando para realizar o sonho de viajar, e a indústria do turismo tem se adaptado para atender a esse público. Destinos turísticos populares entre os idosos incluem cidades históricas, praias tranquilas e resorts all-inclusive que oferecem conforto e acessibilidade. Lugares como Gramado, Caldas Novas e Porto de Galinhas no Brasil, ou cidades europeias como Lisboa, Madrid e Roma, são conhecidos por suas infraestruturas adaptadas e atrações culturais. Para garantir uma viagem segura e agradável, é importante planejar com antecedência. Verificar a acessibilidade dos locais, garantir que as acomodações sejam confortáveis e preparar um roteiro que inclua momentos de descanso são dicas essenciais. Muitos pacotes de viagem são especialmente desenhados para a terceira idade, incluindo serviços como transporte adaptado, guias turísticos experientes e assistência médica. Esses pacotes proporcionam segurança e tranquilidade, permitindo que os idosos aproveitem ao máximo suas aventuras.'
    },
    {
      image: '../../assets/image/News07.webp',
      image_alt: 'Um grupo diversificado de idosos engajados em várias atividades produtivas após a aposentadoria. O grupo inclui pessoas de diferentes origens étnicas, como negros, asiáticos, indígenas, e algumas com deficiências. As atividades retratadas incluem voluntariado em um jardim comunitário, pintura em uma aula de arte e consultoria em um ambiente de pequeno negócio. O ambiente é dinâmico, com sorrisos e um senso de propósito e realização.',
      title: 'Aposentadoria ativa',
      subtitle: 'Como se manter produtivo após a aposentadoria',
      summary: 'Manter-se ativo e produtivo após a aposentadoria pode trazer inúmeros benefícios à saúde mental e física dos idosos. Voluntariado, hobbies e novas carreiras são algumas das opções para uma aposentadoria ativa.',
      content: 'A aposentadoria não significa o fim da produtividade. Muitos idosos encontram novas formas de se manterem ativos e envolvidos, o que traz benefícios significativos para a saúde mental e física. O voluntariado, por exemplo, é uma excelente maneira de contribuir para a comunidade e ao mesmo tempo manter-se ocupado. Atividades como jardinagem, pintura, leitura e até a aprendizagem de novas habilidades, como tocar um instrumento ou aprender um novo idioma, são formas populares de passar o tempo de maneira construtiva. Esses hobbies não só proporcionam prazer, mas também estimulam o cérebro e podem prevenir o declínio cognitivo. Além disso, muitos aposentados optam por iniciar uma segunda carreira, muitas vezes em áreas de interesse que não puderam explorar anteriormente. Consultoria, aulas particulares e pequenas empresas são algumas das opções. Manter uma rotina diária, estabelecer metas e continuar a socializar são fatores importantes para uma aposentadoria ativa e satisfatória. Essas atividades ajudam a manter o senso de propósito e contribuem para uma vida mais feliz e saudável.'
    },
    {
      image: '../../assets/image/News08.webp',
      image_alt: 'Um grupo diversificado de idosos participando de um workshop de saúde mental. O grupo inclui pessoas de diferentes origens étnicas, como negros, asiáticos, indígenas, e algumas com deficiências. Eles estão sentados em círculo, ouvindo atentamente um facilitador que está explicando algo em um quadro branco. A sala é iluminada e acolhedora, com pôsteres motivacionais nas paredes e um senso de empatia e apoio.',
      title: 'Saúde mental na terceira idade',
      subtitle: 'Importância do cuidado psicológico',
      summary: 'Manter a saúde mental na terceira idade é crucial para o bem-estar geral. Workshops e grupos de apoio oferecem suporte emocional e estratégias para lidar com desafios psicológicos comuns nessa fase da vida.',
      content: 'A saúde mental na terceira idade é tão importante quanto a saúde física. Enfrentar desafios psicológicos como depressão, ansiedade e solidão pode ser difícil, mas existem recursos disponíveis para ajudar. Workshops de saúde mental e grupos de apoio são uma excelente forma de proporcionar suporte emocional e ensinar estratégias de enfrentamento. Esses workshops oferecem um ambiente seguro e acolhedor onde os idosos podem compartilhar suas experiências e aprender uns com os outros. Facilitadores treinados conduzem as sessões, proporcionando orientações e ferramentas para melhorar a saúde mental. Atividades incluem discussões em grupo, exercícios de mindfulness e técnicas de relaxamento. Participar desses workshops pode ajudar os idosos a construir uma rede de apoio social, reduzir sentimentos de isolamento e melhorar a autoestima. Além disso, aprender sobre saúde mental pode empoderar os idosos a reconhecerem sinais de problemas e a procurarem ajuda quando necessário. Os benefícios de uma boa saúde mental são muitos, incluindo melhor qualidade de sono, maior satisfação com a vida e até mesmo melhor saúde física. Manter-se mentalmente saudável é um componente essencial para uma vida plena e feliz na terceira idade.'
    },
    {
      image: '../../assets/image/News09.webp',
      image_alt: 'Um grupo diversificado de idosos em um ambiente de sala de aula, participando de um workshop de educação financeira. O grupo inclui pessoas de diferentes origens étnicas, como negros, asiáticos, indígenas, e algumas com deficiências. Eles estão sentados em mesas, olhando para um instrutor que está explicando conceitos financeiros em um quadro branco. O ambiente é profissional e acolhedor, com gráficos e materiais educativos visíveis, promovendo um senso de aprendizado e empoderamento.',
      title: 'Importância da educação financeira na terceira idade',
      subtitle: 'Como gerenciar finanças após a aposentadoria',
      summary: 'A educação financeira é crucial para garantir uma aposentadoria tranquila e sem preocupações. Cursos e workshops ensinam habilidades importantes para gerenciar finanças e evitar fraudes.',
      content: 'Manter uma boa saúde financeira é essencial para uma aposentadoria tranquila e sem preocupações. A educação financeira na terceira idade ajuda os idosos a gerenciar suas finanças, planejar o futuro e evitar fraudes. Muitos bancos e instituições oferecem cursos e workshops específicos para essa faixa etária. Esses cursos ensinam habilidades importantes como orçamento, investimento e planejamento sucessório. Além disso, abordam como reconhecer e evitar fraudes financeiras, que muitas vezes têm como alvo os idosos. Ter conhecimento sobre essas áreas pode fazer uma grande diferença na segurança financeira. Participar de workshops financeiros permite que os idosos se sintam mais confiantes em suas decisões financeiras. Eles aprendem a criar e manter um orçamento, entender diferentes opções de investimento e planejar suas despesas futuras de maneira eficaz. A educação financeira também promove a independência, permitindo que os idosos tomem decisões informadas e evitem depender de outras pessoas para gerenciar seu dinheiro. Isso contribui para um maior senso de controle e satisfação com a vida.'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}