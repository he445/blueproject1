console.clear()
const prompt = require("prompt-sync")();
const intro1 =  (`– Acorde, acorde!
Uma luz faiscante invade a sua tenda enquanto vc dorme.
– Acorde, vamos! - repete a voz feminina doce e ao mesmo tempo Régia.`)
const intro2= (`O jovem se apequena em sua tenda na esperança de se 
esconder de tal aparição`)
const intro3=(`– Não há tempo para dormir, porque enquanto vocês dormem, das terras além do deserto desperta o grande terror, 
 o mesmo terror que expulsou o povo elfo de suas terras, o terror que consome tudo que vê, aquele que nem as estrelas, 
 plua ou mesmo o sol estão a salvo.`)
const intro4= (`Levante jovem a Dama das Batalhas te chama a ação, 
erga-se e lute e evite o consumo de tudo que é real.`)
setTimeout(function(){console.log (intro1)},75)
setTimeout(function(){console.log (intro2)},1000)
setTimeout(function(){console.log (intro3)},2000)
setTimeout(function(){console.log (intro4)},3000)

let i;


setTimeout(function(){
console.log (`A Dama das Batalhas Rainha dos deuses, o convocou a reunir os fraguimentos dos deuses antigos 
para derrotar Aslugh "O Grande Terror do Leste."
Para isso você deve convencer Os Anões,os Elfos, os humanos e quiar-los a batalha contra o Grande Terror. 
você aceita a missão da Dama das Batalhas? `)
    let init= prompt ();
  do {
  

if(init.toLowerCase() == "sim") {console.log (`Finalmente, sabia que eu tinha algum propósito nesse mundo! 
A questão agora é como eu vou conseguir convencer as outras raças se nem dentre a minha eu sou querido? 
Tenho que enfrentar meus medos, A Dama das Batalhas me convocou.`),i=3
   } else {console.log(`Você acorda no outro dia, acredita ser tudo apenas um sonho.Um dia enquanto você 
trabalha no campo o sol desaparece, um terremoto forte abala a cidade você escuta os lamentos do seu povo. 
Você cai e vê sua irmã menor ao chão, morta, e derrepente…`), i=0};
  } while (i>=1&&i<3);
while (i>=1) {
    console.log (`Você caminha a tenda das matriarcas e após falar com a Matriarca Magnela ela pede que 
se sua afirmação é real você deve dizer a senha sagrada. Ao longe você escuta uma voz doce que diz: 
"O raio da curiosidade incendeia a criatividade". Você repete as palavras que ouviu ao longe?`)

m1= prompt ();

  if(m1.toLowerCase()=="sim"){m1=1,console.log(`A Matriarca abre um compartimento secreto ali você vê uma 
chave simples ela te entrega e diz: "Que a dama das Batalhas caminhe ao seu lado". 
Nossa isso foi fácil, fiquei surpreso em até conseguir a audiência com a Matriarca bom agora é continuar.`)
     } else {m1=0,console.log(`Você não acredita numa voz aleatória distante e diz "senha?" a matriarca 
te expulsa da citade o chamndo de herege. "Tá tranquilo, é ficar atento aos sinais e conseguirei 
cumprir minha missão".`)}  
console.log (`Devo falar com os Anões que eles terão o próximo artefato. Você segue viajem até Karach vosh, 
a capital enana, você clama uma audiência com O Rei Ultrufirr Ironhamer. Os guardas riem de você 
e dizem para que você saia e eles deixarão você viver. Você insiste e clama a Dama das Batalhas para 
que te ajude nesse momento? `)
m2=prompt();

  if (m2.toLowerCase()=="sim"){m2=1,console.log(`Você clama a Dama das Batalhas: "Dama, senhora do mundo 
  guardiã da vida, mostre aos hereges o seu poder!" Nada acontece, os Guardas Anões riem mas dizem que 
  isso foi a coisa mais engraçada que eles ouviram na vida e te deija entrar para a audiência.`)
    } else {m2=0, console.log(`Você n fala nada mas durante a noite vc invade a fortaleza.`)}
 console.log (`Você caminha até a sala do trono e clama ser enviado pela Dama das Batalhas O Rei anão ri 
e pede que vc diga a senha sagrada você ao longe escuta a mesma voz doce de antes ela diz: 
"a criatividade cria ferramentas". Você repete o que a voz doce te diz? `)
m3= prompt (); 

  if (m3.toLowerCase()=="sim"){m3=1,console.log(`Você repete a senha, o Anão, velho se surpreende, ele se 
levanta, aperta um botão e do seu trono sai um baú pequeno e simples, ele te entrega e te diz: 
"Que o Martelo de Harigal te guie".`)
    } else {m3=0,console.log(`Você diz com muita confiança: "O raio da curiosidade incendeia a criatividade". 
O Rei Anão ri muito, todo o salão ri também, "tirem esse louco da minha minha frente." Você é expulso.`)}
console.log (`Saindo da capital anana sobra apenas os elfos, você sabe que será difícil. Na grande 
capital elfica, Lustera, você fica sabendo que a Rainha Élfica Larindar já o esperava, 
lá ela diz: "Sua vinda a muito foi profetizada, diga a senha jovem". Vc ao longe escuta a voz "para  
dominar a magia." Você repete os dizeres da voz? `)
m4= prompt (); 

if (m4.toLowerCase()=="sim"){m4=1,console.log(`Você repete o que a voz diz, a Rainha Elfica sorri e 
declara:Aquele que restaurará nossa terra renasceu, e na sua frente flutuando aparece uma pena branca, 
a Rainha te entrega a pena e diz: "Que Alindar, a magia, te fortalessa!"`)
    } else {m4=0,console.log(`Você sinceramente não sabe o que fazer, então diz a primeira coisa que vem 
na cabeça: "Magia". A Rainha diz: "Também foi profetizado que impostores apareceriam. 
Saia humano, a sua presença nos desonra."`)}
  console.log (`Você então parte a batalha contra Aslogh e seu exército no limite do Deserto de Aliscara você 
o vê e seu exército tão numeroso quanto as estrelas do céu, a criatura era maior que as maiores montanhas de 
Ilê Ilê, o Terror com voz de trovão diz: "Haha, os deuses se acovardaram e mandaram um mortal, criança 
vá embora e eu juro que será rápido, ou me enfrente e eu farei ser bem devagar e doloroso" você o enfrenta?`)
m5 = prompt ();

if (m5.toLowerCase()=="sim"){m5=1} else {m5=0}

if (m1+m2+m3+m4+m5==0)
{console.log(`Você decide correr, você sabe que a Dama das Batalhas errou ao te escolher, mas quando 
você virá as costas você sente todo o seu corpo se separar, o monstro olha para você e diz: 
"excelente escolha jovem,excelente escolha."`)}
else if(m1+m2+m3+m4+m5 ==1) {console.log (`Você detém alguns fragmentos e não vai ouvir ameaças vazias, 
você clama a Dama das Batalhas e avança contra seu inimigo. Aslogh pega sua cabeça, a separa do corpo, 
mas ainda sim você se mantém vivo enquanto ele destrói tudo enquanto você assiste e no final ele te deixa 
ali apenas uma cabeça em meio ao nada.`)}
else if(m1+m2+m3+m4+m5 ==2) {console.log (`Você detém alguns fragmentos e não vai ouvir ameaças vazias, 
você clama a Dama das Batalhas e avança contra seu inimigo. Aslogh pega sua cabeça, a separa do corpo, 
mas ainda sim você se mantém vivo enquanto ele destrói tudo enquanto você assiste e no final ele te deixa 
ali apenas uma cabeça em meio ao nada.`)}
else if (m1+m2+m3+m4+m5 ==3) {console.log (`Você detém alguns artefatos, alguns das outras raças se arriscam 
te acompanhando a batalha, vocês estão em grande desvantagem numérica, e alguns fogem ao contemplar o 
Terror de perto, mas você avança, você é o escolhido. Os fragmentos garantem a você uma força e uma 
velocidade sobre humana, mas não é o suficiente. Em minutos, Aslog destrói seu exército. Ele diz: 
"Jovem há  muito não me divertia tanto, por isso te darei uma morte rápida". Ele te olha e você se 
desfaz em pó.`)}
else if (m1+m2+m3+m4+m5 ==4 && m2==0){console.log (`Você junta todos os fragmentos porém o exercito anão 
não te acompanha até o campo de batalha. Você olha para os fragmentos e sabe o que tem que fazer, 
você abre o pequeno baú com a chave e lá você encontra um pergaminho em branco e nele com a pena você 
escreve "O raio da curiosidade incendeia a criatividade, a criatividade cria ferramentas para  domina a 
magia." Do alto uma voz diz: "Para a Batalha!" E todo o seu exército se incendeia com a paixão da batalha. 
A batalha é dura seu exército é quase todo destruído, mas você mata o terror e todo o seu exército se desfaz 
na sua frente, a vitória é dolorosa no entanto, muitas vidas foram perdidas, mas o mundo se livrou de 
Aslogh "O Terror do Leste"`)}
else if (m1+m2+m3+m4+m5 ==4&& m3==0){console.log (`Você marcha a batalha, muita gente te acompanha de 
diversas raças guiados pela lenda do menino que desafiou o consumidor de mundos. Os artefatos coletados 
garantam a você e ao seu exército muita força, a batalha é dura o seu exército todo é perdido porém você tem 
o terror sobre a sua merce. Ao cravar a sua lança no peito da criatura ele sorri: "Você não tem o poder total 
criança". Ele desaparece, houve uma vitória, mas Aslogh ainda assombra essa realidade.`)}
  else if (m5== 0){console.log (`Você decide correr, você sabe que a Dama das Batalhas errou ao te escolher, 
mas quando você virá as costas você sente todo o seu corpo se separar, o monstro olha para você e 
diz: "excelente escolha jovem,excelente escolha."`)}
else{console.log (`Durante a sua missão a mensagem de um guerreiro humano jovem que marcha sozinho é um 
sinal de esperança que nesta terra haverá paz, em poucos meses você saiu de um jovem camponês para o líder 
do exército de todas as raças, Aslogh não te ameaça e nenhum soldado parece ter medo, você calmamente abre 
o baú com a chave pega o pergaminho dentro e escreve "O raio da curiosidade incendeia a criatividade, 
a criatividade cria ferramentas para  dominar a magia." Os céus se abrem e dele saem um exército de 
guerreiros e guerreiras lendárias do passado a frente deles está A Dama das Batalhas em pessoa, nada 
pode parar esse poder, você esmagam Aslogh e sobre seus pés o "Terror" súplica: você não sabe o que tá 
fazendo criança, você não s…". Você decapita a criatura derrotada e na frente do mundo a Dama das Batalhas 
te diz: "Meu filho, eu sabia que você seria capaz, venha comigo e ocupe o seu lugar como uma divindade". 
Enquanto você ascendente aos céus você percebe que os gritos de pavor, atônito você olha e vê que os 
guerreiros lendários estão massacrando o seu exército. "Eles eram bárbaros filho, bestas movidas pelo ódio, 
nós reconstruiremos esse mundo com uma raça mais justa e bondosa".`)}i=0;}
},6100)  