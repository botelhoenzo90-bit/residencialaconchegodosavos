import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import aconchegoLogo from "@/assets/logo-aconchego-dos-avos.png.asset.json";
import medicoGeriatra from "@/assets/medico-geriatra.jpg.asset.json";
import enfermeiraPadrao from "@/assets/enfermeira-padrao.jpg.asset.json";
import tecnicos24Horas from "@/assets/tecnicos-24-horas.jpg.asset.json";
import cuidadoras from "@/assets/cuidadoras.jpg.asset.json";
import nutricionista from "@/assets/nutricionista.jpg.asset.json";
import atividadesSemanais from "@/assets/atividades-semanais.jpg.asset.json";
import fisioterapia from "@/assets/fisioterapia.png.asset.json";
import ambienteAcolhedor from "@/assets/ambiente-acolhedor.png.asset.json";
import {
  Activity, ArrowRight, Bandage, CalendarDays, Check, ChevronDown, CircleCheck, Heart, HeartHandshake, HeartPulse, House, MessageCircle, ShieldCheck, Stethoscope, Tv, Users, Utensils, WashingMachine, Wifi,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Residencial Aconchego dos Avós | Mais que um lar, uma família" },
      { name: "description", content: "Acolhimento, cuidado profissional e carinho no Residencial Aconchego dos Avós." },
      { property: "og:title", content: "Residencial Aconchego dos Avós" },
      { property: "og:description", content: "Mais que um lar, uma família. Cuidado, segurança e acolhimento." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `https://residencialaconchegodosavos.lovable.app${aconchegoLogo.url}` },
      { name: "twitter:image", content: `https://residencialaconchegodosavos.lovable.app${aconchegoLogo.url}` },
      { name: "theme-color", content: "#bceee2" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/555199021329";
const services = [
  { title: "Médico geriatra mensal", image: medicoGeriatra.url, text: "Acompanhamento médico periódico com atenção à saúde e às necessidades de cada residente.", icon: Stethoscope },
  { title: "Enfermeira padrão", image: enfermeiraPadrao.url, text: "Atenção de enfermagem e acompanhamento dos cuidados com responsabilidade e carinho.", icon: HeartPulse },
  { title: "Técnicos 24 horas", image: tecnicos24Horas.url, text: "Equipe técnica presente durante o dia e a noite para apoiar a rotina dos residentes.", icon: ShieldCheck },
  { title: "Cuidadoras", image: cuidadoras.url, text: "Apoio nas atividades diárias com respeito, paciência, atenção e afeto.", icon: Heart },
  { title: "Nutricionista", image: nutricionista.url, text: "Orientação nutricional para uma rotina alimentar planejada conforme as necessidades.", icon: Utensils },
  { title: "Atividades semanais", image: atividadesSemanais.url, text: "Atividades conduzidas por professora para estimular a convivência, a criatividade e o bem-estar.", icon: CalendarDays },
  { title: "Fisioterapia", image: fisioterapia.url, text: "Acompanhamento voltado à mobilidade, funcionalidade e qualidade de vida.", icon: Activity },
  { title: "Estrutura acolhedora", image: ambienteAcolhedor.url, text: "Pátio amplo e monitorado, lavanderia própria, TV a cabo e Wi-Fi.", icon: House },
];
const faqs = [
  ["Quais cuidados estão incluídos?", "Contamos com médico geriátrico mensal, enfermeira padrão, técnicos 24 horas, cuidadoras, nutricionista, professora para atividades semanais e fisioterapia."],
  ["Recebem pacientes em recuperação com menos de 60 anos?", "Sim. Recebemos pacientes em recuperação com menos de 60 anos, em alas separadas. Consulte nossa equipe para conversar sobre as necessidades e disponibilidade."],
  ["O pátio é monitorado?", "Sim, temos um pátio amplo e monitorado, além de espaços para convivência e rotina diária."],
  ["Há lavanderia, TV a cabo e Wi-Fi?", "Sim. O residencial conta com lavanderia própria, TV a cabo e Wi-Fi."],
  ["Como posso conhecer o residencial?", "Entre em contato pelo WhatsApp para tirar dúvidas e combinar uma visita ao Residencial Aconchego dos Avós."],
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const goWhatsapp = (label: string) => window.open(`${WHATSAPP}?text=${encodeURIComponent(`Olá! Vim pelo site do Residencial Aconchego dos Avós e gostaria de ${label.toLowerCase()}.`)}`, "_blank", "noopener,noreferrer");

  return (
    <main className="jt-site maria-site aconchego-overrides">
      <header className="site-header maria-header-hidden">
        <div className="container header-inner">
          <a className="brand maria-brand" href="#inicio" aria-label="Residencial Aconchego dos Avós, cuidado especializado">
            <span className="brand-mark"><HeartPulse size={22}/></span>
            <span><strong>ACONCHEGO DOS AVÓS</strong><small>RESIDENCIAL • CUIDADO • FAMÍLIA</small></span>
          </a>
          <nav className="nav maria-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a><a href="#cuidados">Cuidados</a><a href="#como-funciona">Nossa rotina</a><a href="#duvidas">Dúvidas</a>
          </nav>
          <button className="header-cta" onClick={() => goWhatsapp("agendar um atendimento")}><MessageCircle size={16}/> Falar com a equipe</button>
        </div>
      </header>

      <section className="hero maria-hero" id="inicio">
        <div className="hero-glow"/>
        <div className="container hero-grid">
          <div className="hero-copy center-hero">
            <img className="hero-brand-logo aconchego-logo" src={aconchegoLogo.url} alt="Residencial Aconchego dos Avós" width={747} height={939} />
            <h1>Mais que um lar,<br/><em>uma família.</em></h1>
            <p className="hero-lead">Um lugar para viver com acolhimento, cuidado profissional e momentos que fazem bem. Cada pessoa é recebida com respeito, atenção e muito carinho.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre meu caso")}><MessageCircle size={18}/> Converse com nossa equipe</button>
              <a className="btn btn-outline" href="#cuidados">Conheça nossa casa <ArrowRight size={17}/></a>
            </div>
            <div className="hero-trust"><span><Check size={15}/> Atenção individual</span><span><Check size={15}/> Atendimento humanizado</span><span><Check size={15}/> Cuidado especializado</span></div>
          </div>
        </div>
      </section>

      <div className="info-marquee" aria-label="Áreas de atendimento"><div className="marquee-track">{[1,2].map(n=><div className="marquee-group" key={n}><span>✦ MAIS QUE UM LAR, UMA FAMÍLIA</span><span>✦ CUIDADO 24 HORAS</span><span>✦ ACOLHIMENTO E RESPEITO</span><span>✦ ATIVIDADES SEMANAIS</span><span>✦ BEM-ESTAR E CONVIVÊNCIA</span><span>✦ EQUIPE MULTIDISCIPLINAR</span><span>✦ UM LAR ACOLHEDOR</span></div>)}</div></div>

      <section className="section intro-section" id="sobre"><div className="container intro-grid"><div className="intro-illustration maria-profile-photo photo-placeholder" role="img" aria-label="Espaço reservado para foto do residencial"><span>FOTO</span><small>Foto do residencial</small></div><div className="intro-copy"><span className="eyebrow">SEJA BEM-VINDO À NOSSA CASA</span><h2>Uma rotina com cuidado, <em>respeito e afeto.</em></h2><p>Sabemos que escolher um residencial para alguém querido é uma decisão importante. Nosso compromisso é oferecer um ambiente acolhedor, com uma equipe preparada para acompanhar a rotina e olhar para cada pessoa com atenção e dignidade.</p><p>Aqui, o cuidado vai além das necessidades diárias: valorizamos a convivência, os vínculos, o conforto e os pequenos momentos que tornam cada dia especial.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer o residencial")}><MessageCircle size={18}/> Conhecer o residencial</button></div></div></section>

      <section className="section pain-section"><div className="container narrow center"><span className="eyebrow">NOSSO JEITO DE CUIDAR</span><h2>Cuidado que respeita a história e a <em>individualidade.</em></h2><p>Mais do que oferecer assistência, queremos que cada residente se sinta acolhido, respeitado e parte de uma família. A rotina combina acompanhamento profissional, convivência e atenção aos detalhes.</p><div className="check-list centered-list"><div><Check size={17}/><span>Atenção de uma equipe presente e cuidadosa.</span></div><div><Check size={17}/><span>Atividades e convivência para tornar os dias mais leves.</span></div><div><Check size={17}/><span>Um ambiente acolhedor, com respeito aos hábitos e à história de cada pessoa.</span></div></div><button className="btn btn-primary" onClick={() => goWhatsapp("tirar dúvidas sobre nossos cuidados")}><MessageCircle size={18}/> Quero tirar minhas dúvidas</button></div></section>

      <section className="section procedures-section" id="cuidados"><div className="container"><div className="section-heading center"><span className="eyebrow">CUIDADO EM CADA DETALHE</span><h2>Uma equipe presente para <em>cuidar de verdade.</em></h2><p>Conheça os profissionais e serviços que apoiam o bem-estar, a rotina e as necessidades individuais de quem mora conosco.</p></div><div className="procedure-window"><div className="procedure-track">{[...services,...services].map(({title,text,image,icon:Icon},i)=><article className="procedure-card maria-service-card" key={`${title}-${i}`}><img className="procedure-photo" src={image} alt={title} loading={i<services.length?"eager":"lazy"}/><div className="procedure-content"><div className="procedure-icon"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer os serviços do residencial")}><MessageCircle size={18}/> Conhecer os serviços</button></div></div></section>





      <section className="section how-section" id="como-funciona"><div className="container"><div className="section-heading center"><span className="eyebrow">NOSSA ROTINA</span><h2>Cuidado e carinho em <em>cada etapa do dia.</em></h2><p>Uma rotina que valoriza o conforto, a convivência, a atenção profissional e os momentos compartilhados.</p></div><div className="steps-grid">{[["01","Acolhimento","Conhecemos a pessoa, sua história e as necessidades de cuidado."],["02","Avaliação","A equipe acompanha a rotina com responsabilidade e carinho."],["03","Plano individual","Atividades e momentos em grupo incentivam vínculos e bem-estar."],["04","Acompanhamento","Atenção aos detalhes para apoiar uma vida com mais conforto."]].map(([n,t,d])=><article className="step-card" key={n}><span className="step-number">{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre uma visita")}><MessageCircle size={18}/> Iniciar uma conversa</button></div></div></section>

<section className="section video-testimonials-section" id="depoimentos-em-video">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">CONHEÇA NOSSA CASA</span>
            <h2>Vídeos que aproximam você do nosso <em>dia a dia.</em></h2>
            <p>Adicione aqui vídeos reais do residencial, dos ambientes e das atividades. Mostre às famílias um pouco do nosso jeito de acolher.</p>
          </div>
          <div className="video-testimonials-grid">
            {[
              ["Conheça o residencial","Vídeo do residencial a adicionar"],
              ["Nossos ambientes","Vídeo do ambiente a adicionar"],
              ["Atividades e convivência","Vídeo das atividades a adicionar"]
            ].map(([title,caption])=><article className="video-testimonial-card" key={title}>
              <div className="video-testimonial-placeholder"><span className="video-play" aria-hidden="true">▶</span><span className="video-placeholder-label">VÍDEO</span></div>
              <div className="video-testimonial-copy"><h3>{title}</h3><p>{caption}</p></div>
            </article>)}
          </div>
        </div>
      </section>

<section className="section maria-reviews-section aconchego-welcome-section" id="convivencia">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">MAIS QUE UM LAR, UMA FAMÍLIA</span>
            <h2>Carinho, companhia e cuidado em <em>todos os dias.</em></h2>
            <p>Valorizamos a história de cada pessoa e criamos oportunidades para conviver, compartilhar experiências e sentir-se em casa.</p>
          </div>
          <div className="aconchego-values-grid">
            <article><span>♡</span><h3>Afeto e respeito</h3><p>Um atendimento atencioso, que reconhece a individualidade de cada residente.</p></article>
            <article><span>☀</span><h3>Dias com propósito</h3><p>Atividades semanais e momentos de convivência que estimulam a participação.</p></article>
            <article><span>⌂</span><h3>Tranquilidade para a família</h3><p>Uma equipe presente e uma rotina pensada para oferecer cuidado e acolhimento.</p></article>
          </div>
        </div>
      </section>

      <section className="section aconchego-gallery-section" id="ambientes"><div className="container"><div className="section-heading center"><span className="eyebrow">CONHEÇA NOSSA CASA</span><h2>Ambientes para viver com <em>conforto e acolhimento.</em></h2><p>Um espaço para conviver, descansar e criar boas lembranças. As imagens são ilustrativas e podem ser substituídas por fotos reais do residencial.</p></div><div className="aconchego-gallery-grid">{[
 {title:"Espaços de convivência",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85"},
 {title:"Conforto no dia a dia",image:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85"},
 {title:"Ambientes acolhedores",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85"}
 ].map(item=><article className="aconchego-gallery-card" key={item.title}><img src={item.image} alt={item.title} loading="lazy"/><h3>{item.title}</h3></article>)}</div><div className="aconchego-amenities"><span><House size={17}/> Pátio amplo e monitorado</span><span><WashingMachine size={17}/> Lavanderia própria</span><span><Tv size={17}/> TV a cabo</span><span><Wifi size={17}/> Wi-Fi</span></div></div></section>

      <section className="section benefits-section"><div className="container"><div className="section-heading center"><span className="eyebrow">NOSSO COMPROMISSO</span><h2>Informação clara, acolhimento e <em>responsabilidade.</em></h2></div><div className="benefit-grid maria-benefits"><article><span>01</span><HeartPulse/><h3>Atenção individual</h3><p>Cada residente tem sua história, hábitos e necessidades.</p></article><article><span>02</span><ShieldCheck/><h3>Equipe presente</h3><p>Técnicos disponíveis 24 horas para apoiar a rotina.</p></article><article><span>03</span><Stethoscope/><h3>Convivência</h3><p>Atividades semanais e momentos compartilhados.</p></article><article><span>04</span><CircleCheck/><h3>Estrutura acolhedora</h3><p>Pátio monitorado, lavanderia própria, TV a cabo e Wi-Fi.</p></article></div></div></section>

      <section className="section maria-location-section" id="localizacao"><div className="container maria-location-grid"><div><span className="eyebrow">LOCALIZAÇÃO</span><h2>Um lugar para sua família conhecer e <em>se sentir acolhida.</em></h2><p>Entre em contato para tirar dúvidas e combinar uma visita ao Residencial Aconchego dos Avós.</p><button className="btn btn-primary" onClick={() => goWhatsapp("consultar endereço e disponibilidade de atendimento")}><MessageCircle size={18}/> Agendar uma visita</button><p className="maria-map-note">Fale com nossa equipe para mais informações.</p></div><div className="maria-map-frame"><iframe title="Mapa de localização do residencial" src="https://maps.google.com/maps?q=Residencial%20Aconchego%20dos%20Av%C3%B3s&t=&z=10&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div></section>


      <section className="section faq-section" id="duvidas"><div className="container faq-layout"><div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Sua família merece informação e <em>tranquilidade.</em></h2><p>Estamos à disposição para apresentar nossa estrutura, explicar os cuidados e conversar sobre as necessidades da sua família.</p><button className="btn btn-primary" onClick={() => goWhatsapp("tirar uma dúvida")}><MessageCircle size={18}/> Tirar uma dúvida</button></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={openFaq===i?"faq-item active":"faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i&&<div className="faq-answer"><p>{a}</p></div>}</div>)}</div></div></section>

      <section className="section final-cta maria-final"><div className="final-glow"/><div className="container narrow center"><span className="eyebrow">VAMOS CONVERSAR?</span><h2>O próximo passo pode ser uma visita. Vamos nos conhecer?</h2><p>Converse com nossa equipe e conheça o Residencial Aconchego dos Avós.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre atendimento")}><MessageCircle size={18}/> Falar com a equipe pelo WhatsApp</button></div></section>

      <footer className="footer maria-footer"><div className="container footer-grid"><div className="footer-brand"><img className="footer-logo aconchego-logo" src={aconchegoLogo.url} alt="Residencial Aconchego dos Avós" width={747} height={939} loading="lazy" /><p>Mais que um lar, uma família. Acolhimento, cuidado e respeito em cada etapa da vida.</p></div><div><h4>Navegação</h4><a href="#sobre">Nossa casa</a><a href="#cuidados">Cuidados</a><a href="#como-funciona">Nossa rotina</a><a href="#duvidas">Perguntas frequentes</a></div><div><h4>Contato</h4><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={14}/> +55 51 9902-1329</a><span><ShieldCheck size={14}/> Mais que um lar, uma família</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Residencial Aconchego dos Avós.</span><span>Mais que um lar, uma família</span></div></footer>

      <a className="floating-wa maria-floating-wa" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a equipe pelo WhatsApp"><img src="/whatsapp-flutuante/image.png" alt="" /><span>WhatsApp</span></a>
    </main>
  );
}
