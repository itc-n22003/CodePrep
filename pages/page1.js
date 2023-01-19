import Header from 'component/page1/header'
import Hero from 'component/page1/hero'
import Footer from 'component/page1/footer'

const Page1 = () => {
  return (
    <>
      <Header />
      <Hero
        title='Monstercat Uncaged'
        subtitle=''
        url1='https://www.youtube.com/watch?v=Tzb0_qQWioQ'
        name1='Astronaut - Apollo'
        url2='https://www.youtube.com/watch?v=FjSQUx-k1co'
        name2='Pegboard Nerds - New Style'
      />
      <Hero
        title='Monstercat Instinct'
        subtitle=''
        url1='https://www.youtube.com/watch?v=Am9DJF2QDiQ'
        name1='Sabai - Scared'
        url2='https://www.youtube.com/watch?v=GMb02tAqDRM'
        name2='Bad Computer - Silhouette'
      />
      <Footer />
    </>
  )
}

export default Page1
