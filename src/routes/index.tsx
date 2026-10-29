import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ArrowRight, Baby, CalendarDays, Check, ChevronDown, Heart, HeartHandshake,
  House, Leaf, MessageCircle, PlayCircle, ShieldCheck, Sparkles, Stethoscope, Tv,
  Users, Utensils, WashingMachine, Wifi, Flower2, Sun, BedDouble,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Residencial Aconchego dos Avós | Mais que um lar, uma família" },
      { name: "description", content: "Acolhimento, cuidado profissional e rotina com carinho no Residencial Aconchego dos Avós. Conheça nossa estrutura e fale com a equipe." },
      { property: "og:title", content: "Residencial Aconchego dos Avós" },
      { property: "og:description", content: "Mais que um lar, uma família. Cuidado, segurança e acolhimento em cada detalhe." },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#c9f1e8" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/555199021329";
const contact = (message: string) => `${WHATSAPP}?text=${encodeURIComponent(message)}`;

const careServices = [
  { icon: Stethoscope, title: "Médico geriátrico mensal", text: "Acompanhamento médico periódico para observar a saúde e as necessidades de cada residente." },
  { icon: HeartHandshake, title: "Enfermeira padrão", text: "Atenção de enfermagem e acompanhamento dos cuidados com responsabilidade e carinho." },
  { icon: ShieldCheck, title: "Técnicos 24 horas", text: "Equipe técnica presente dia e noite, para apoiar a rotina e os cuidados dos residentes." },
  { icon: Heart, title: "Cuidadoras", text: "Apoio próximo nas atividades do dia a dia, com respeito, paciência e afeto." },
  { icon: Utensils, title: "Nutricionista", text: "Orientação nutricional para uma rotina alimentar planejada conforme as necessidades." },
  { icon: CalendarDays, title: "Atividades semanais", text: "Professora conduz atividades que estimulam a convivência, a criatividade e o bem-estar." },
  { icon: Activity, title: "Fisioterapia", text: "Atividades e acompanhamento voltados à mobilidade, funcionalidade e qualidade de vida." },
  { icon: House, title: "Ambiente acolhedor", text: "Pátio amplo e monitorado, lavanderia própria e espaços pensados para a rotina." },
];

const gallery = [
  { title: "Espaços para conviver", description: "Ambientes convidativos para conversar, compartilhar momentos e criar vínculos.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85" },
  { title: "Conforto no dia a dia", description: "Espaços claros e aconchegantes para descansar e se sentir em casa.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85" },
  { title: "Pátio e contato com o ar livre", description: "Um espaço para aproveitar a luz natural e momentos tranquilos.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85" },
  { title: "Detalhes que acolhem", description: "Uma atmosfera familiar, com espaços preparados para receber com carinho.", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85" },
];

const faqs = [
  ["Quais cuidados estão incluídos?", "O residencial conta com médico geriátrico mensal, enfermeira padrão, técnicos 24 horas, cuidadoras, nutricionista, professora para atividades semanais e fisioterapia."],
  ["O residencial aceita pessoas com menos de 60 anos?", "Sim. Também aceitamos pessoas em recuperação com menos de 60 anos, em alas separadas. Entre em contato para conversar sobre as necessidades e a disponibilidade."],
  ["O local possui espaços monitorados?", "Sim. O residencial conta com pátio amplo e monitorado, além de espaços para a convivência e a rotina diária."],
  ["Há lavanderia, TV a cabo e Wi-Fi?", "Sim. Temos lavanderia própria, TV a cabo e Wi-Fi para apoiar o conforto do dia a dia."],
  ["Como faço para conhecer o residencial?", "Clique em um dos botões de WhatsApp para falar com nossa equipe, tirar dúvidas e combinar os próximos passos para conhecer o espaço."],
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="jt-site aconchego-site">
      <header className="aconchego-header">
        <div className="container aconchego-header-inner">
          <a className="aconchego-brand" href="#inicio" aria-label="Residencial Aconchego dos Avós - início">
            <span className="aconchego-brand-icon"><HeartHandshake size={25}/></span>
            <span><strong>Aconchego dos Avós</strong><small>RESIDENCIAL • CUIDADO • FAMÍLIA</small></span>
          </a>
          <nav className="aconchego-nav" aria-label="Navegação principal">
            <a href="#sobre">Nossa casa</a><a href="#cuidados">Cuidados</a><a href="#ambientes">Ambientes</a><a href="#videos">Vídeos</a><a href="#duvidas">Dúvidas</a>
          </nav>
          <a className="aconchego-header-cta" href={contact("Olá! Gostaria de conhecer o Residencial Aconchego dos Avós.")} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Fale conosco</a>
        </div>
      </header>

      <section className="aconchego-hero" id="inicio">
        <div className="aconchego-hero-shape shape-one"/><div className="aconchego-hero-shape shape-two"/>
        <div className="container aconchego-hero-grid">
          <div className="aconchego-hero-copy">
            <span className="aconchego-eyebrow"><Sparkles size={15}/> CUIDADO COM CARINHO, TODOS OS DIAS</span>
            <h1>Mais que um lar,<br/><em>uma família.</em></h1>
            <p>Um lugar para viver com acolhimento, cuidado profissional e momentos que fazem bem. No Residencial Aconchego dos Avós, cada pessoa é recebida com respeito, atenção e muito carinho.</p>
            <div className="aconchego-hero-actions">
              <a className="aconchego-btn aconchego-btn-primary" href={contact("Olá! Quero saber mais sobre o Residencial Aconchego dos Avós.")} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Converse com nossa equipe</a>
              <a className="aconchego-btn aconchego-btn-ghost" href="#sobre">Conheça nosso espaço <ArrowRight size={17}/></a>
            </div>
            <div className="aconchego-trust"><span><Check size={16}/> Atenção individual</span><span><Check size={16}/> Equipe de cuidado</span><span><Check size={16}/> Ambiente acolhedor</span></div>
          </div>
          <div className="aconchego-hero-visual">
            <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=90" alt="Quarto confortável e acolhedor" fetchPriority="high"/>
            <div className="aconchego-photo-note"><span className="note-icon"><Heart size={19}/></span><span><strong>Um novo capítulo, com carinho</strong><small>Bem-estar em cada detalhe</small></span></div>
            <div className="aconchego-round-stamp"><Flower2 size={24}/><span>AFETO</span><small>e cuidado</small></div>
          </div>
        </div>
      </section>

      <div className="aconchego-ribbon" aria-label="Diferenciais do residencial"><div className="aconchego-ribbon-track">{[1,2].map(n=><div className="aconchego-ribbon-group" key={n}><span>♡ ACOLHIMENTO</span><span>✿ CUIDADO PROFISSIONAL</span><span>♡ CONVIVÊNCIA</span><span>✿ MAIS QUALIDADE DE VIDA</span><span>♡ MAIS QUE UM LAR, UMA FAMÍLIA</span></div>)}</div></div>

      <section className="aconchego-section aconchego-about" id="sobre">
        <div className="container aconchego-about-grid">
          <div className="aconchego-about-image"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85" alt="Sala iluminada e confortável" loading="lazy"/><div className="aconchego-image-badge"><Sun size={20}/><span><strong>Um ambiente de paz</strong><small>Para se sentir em casa</small></span></div></div>
          <div className="aconchego-copy"><span className="aconchego-eyebrow">SEJA BEM-VINDO À NOSSA CASA</span><h2>Uma rotina com cuidado, <em>respeito e afeto.</em></h2><p>Sabemos que escolher um residencial para alguém querido é uma decisão importante. Por isso, nosso compromisso é oferecer um ambiente acolhedor, com uma equipe preparada para acompanhar a rotina e olhar para cada pessoa com atenção e dignidade.</p><p>Aqui, o cuidado vai além das necessidades diárias: valorizamos a convivência, os vínculos, o conforto e os pequenos momentos que tornam cada dia especial.</p><div className="aconchego-pills"><span><Heart size={15}/> Carinho de família</span><span><ShieldCheck size={15}/> Cuidado e segurança</span><span><Leaf size={15}/> Bem-estar</span></div><a className="aconchego-btn aconchego-btn-primary" href={contact("Olá! Gostaria de agendar uma visita ao residencial.")} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Quero conhecer o residencial</a></div>
        </div>
      </section>

      <section className="aconchego-section aconchego-care" id="cuidados">
        <div className="container">
          <div className="aconchego-section-heading"><span className="aconchego-eyebrow">CUIDADO EM CADA DETALHE</span><h2>Uma equipe presente para <em>cuidar de verdade.</em></h2><p>Profissionais e serviços que apoiam o bem-estar, a rotina e as necessidades individuais de quem mora conosco.</p></div>
          <div className="aconchego-care-grid">{careServices.map(({icon:Icon,title,text},i)=><article className="aconchego-care-card" key={title}><span className="aconchego-care-number">{String(i+1).padStart(2,"0")}</span><div className="aconchego-care-icon"><Icon size={24}/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="aconchego-care-note"><Heart size={20}/><p><strong>O cuidado é feito de presença.</strong> Cada residente tem sua história, seus hábitos e suas necessidades. Nosso olhar é para a pessoa por inteiro.</p></div>
        </div>
      </section>

      <section className="aconchego-section aconchego-environment" id="ambientes">
        <div className="container">
          <div className="aconchego-section-heading"><span className="aconchego-eyebrow">NOSSO ESPAÇO</span><h2>Um ambiente que convida a <em>ficar à vontade.</em></h2><p>Conheça um pouco da atmosfera que queremos proporcionar: conforto, tranquilidade e espaços para conviver. As imagens abaixo são referências ilustrativas; substitua-as pelas fotos reais do residencial para mostrar fielmente cada ambiente.</p></div>
          <div className="aconchego-gallery">{gallery.map((item,i)=><article className={`aconchego-gallery-card gallery-card-${i+1}`} key={item.title}><img src={item.image} alt={item.title} loading="lazy"/><div className="aconchego-gallery-overlay"><span>0{i+1} · NOSSO RESIDENCIAL</span><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div>
          <div className="aconchego-amenities"><span><House size={18}/> Pátio amplo e monitorado</span><span><WashingMachine size={18}/> Lavanderia própria</span><span><Tv size={18}/> TV a cabo</span><span><Wifi size={18}/> Wi-Fi</span></div>
        </div>
      </section>

      <section className="aconchego-section aconchego-video-section" id="videos">
        <div className="container aconchego-video-layout">
          <div className="aconchego-copy"><span className="aconchego-eyebrow">VEJA DE PERTO</span><h2>Um pedacinho do nosso dia a <em>dia.</em></h2><p>Este espaço foi preparado para você adicionar vídeos do residencial, apresentar os ambientes, mostrar atividades e compartilhar um pouco da rotina. Assim, as famílias podem conhecer melhor nosso jeito de cuidar.</p><a className="aconchego-btn aconchego-btn-primary" href={contact("Olá! Gostaria de receber mais informações e vídeos do Residencial Aconchego dos Avós.")} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Peça mais informações</a></div>
          <div className="aconchego-video-grid"><article className="aconchego-video-placeholder"><div className="aconchego-video-screen"><PlayCircle size={54}/><span>ADICIONE SEU VÍDEO</span></div><div className="aconchego-video-caption"><strong>Conheça o residencial</strong><small>Apresentação dos espaços e instalações</small></div></article><article className="aconchego-video-placeholder"><div className="aconchego-video-screen video-screen-alt"><PlayCircle size={46}/><span>ADICIONE SEU VÍDEO</span></div><div className="aconchego-video-caption"><strong>Um pouco da nossa rotina</strong><small>Atividades e momentos de convivência</small></div></article></div>
        </div>
      </section>

      <section className="aconchego-section aconchego-special">
        <div className="container aconchego-special-card"><div className="aconchego-special-icon"><Users size={31}/></div><div><span className="aconchego-eyebrow">TAMBÉM RECEBEMOS</span><h2>Cuidado também para pessoas em <em>recuperação.</em></h2><p>Aceitamos pacientes em recuperação com menos de 60 anos, em alas separadas. Converse com nossa equipe para explicar a situação, entender as possibilidades de acolhimento e confirmar a disponibilidade.</p></div><a className="aconchego-btn aconchego-btn-white" href={contact("Olá! Gostaria de consultar sobre acolhimento para paciente em recuperação com menos de 60 anos.")} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Consultar disponibilidade</a></div>
      </section>

      <section className="aconchego-section aconchego-values">
        <div className="container"><div className="aconchego-section-heading"><span className="aconchego-eyebrow">O QUE VALORIZAMOS</span><h2>Porque todo mundo merece se sentir <em>em casa.</em></h2></div><div className="aconchego-values-grid"><article><span><HeartHandshake size={25}/></span><h3>Afeto</h3><p>Tratamos cada pessoa com respeito, paciência e carinho.</p></article><article><span><ShieldCheck size={25}/></span><h3>Atenção</h3><p>Uma equipe presente para acompanhar a rotina e os cuidados.</p></article><article><span><Flower2 size={25}/></span><h3>Convivência</h3><p>Espaço para compartilhar histórias, atividades e bons momentos.</p></article><article><span><Sparkles size={25}/></span><h3>Dignidade</h3><p>Valorizamos a individualidade e a história de cada residente.</p></article></div></div>
      </section>

      <section className="aconchego-section aconchego-faq" id="duvidas"><div className="container aconchego-faq-layout"><div className="aconchego-copy"><span className="aconchego-eyebrow">PERGUNTAS FREQUENTES</span><h2>Vamos conversar sobre o que é importante para <em>sua família?</em></h2><p>Estamos aqui para ouvir, orientar e ajudar você a conhecer melhor o residencial.</p><a className="aconchego-btn aconchego-btn-primary" href={contact("Olá! Tenho algumas dúvidas sobre o residencial.")} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Tirar minhas dúvidas</a></div><div className="aconchego-faq-list">{faqs.map(([q,a],i)=><div className={openFaq===i?"aconchego-faq-item is-open":"aconchego-faq-item"} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown size={19}/></button>{openFaq===i&&<div className="aconchego-faq-answer"><p>{a}</p></div>}</div>)}</div></div></section>

      <section className="aconchego-final-cta"><div className="container"><span className="aconchego-eyebrow"><Heart size={15}/> SERÁ UM PRAZER RECEBER VOCÊ</span><h2>O próximo passo pode ser uma visita.<br/><em>Vamos nos conhecer?</em></h2><p>Fale com nossa equipe, tire suas dúvidas e conheça as possibilidades de acolhimento no Residencial Aconchego dos Avós.</p><a className="aconchego-btn aconchego-btn-primary" href={contact("Olá! Quero conversar com a equipe e conhecer o Residencial Aconchego dos Avós.")} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Falar pelo WhatsApp</a></div></section>

      <footer className="aconchego-footer"><div className="container aconchego-footer-grid"><div className="aconchego-footer-brand"><a className="aconchego-brand" href="#inicio"><span className="aconchego-brand-icon"><HeartHandshake size={25}/></span><span><strong>Aconchego dos Avós</strong><small>RESIDENCIAL • CUIDADO • FAMÍLIA</small></span></a><p>Mais que um lar, uma família. Acolhimento, cuidado e respeito em cada etapa da vida.</p></div><div><h4>Explore</h4><a href="#sobre">Nossa casa</a><a href="#cuidados">Cuidados</a><a href="#ambientes">Ambientes</a><a href="#videos">Vídeos</a></div><div><h4>Contato</h4><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={16}/> +55 51 9902-1329</a><span><Heart size={16}/> Mais que um lar, uma família</span></div></div><div className="container aconchego-footer-bottom"><span>© {new Date().getFullYear()} Residencial Aconchego dos Avós.</span><span>Feito com carinho para acolher.</span></div></footer>
      <a className="aconchego-floating-wa" href={contact("Olá! Vim pelo site do Residencial Aconchego dos Avós e gostaria de mais informações.")} target="_blank" rel="noreferrer" aria-label="Falar com o residencial pelo WhatsApp"><MessageCircle size={23}/><span>Fale conosco</span></a>
    </main>
  );
}
