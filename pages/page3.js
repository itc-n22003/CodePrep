import Header from 'component/page3/header'
import Maker from 'component/page3/maker'

const Page3 = () => {
  return (
    <div>
      <Header />
      <Maker
        maker1='YAMAHA'
        maker2='Honda'
        maker3='SUZUKI'
        maker4='Kawasaki'
        cruiser1='XV1900CU'
        cruiser2='Valkyrie'
        cruiser3='BOULEVARD'
        cruiser4='VN2000'
        off1='SERROW 250'
        off2='CRF250R'
        off3='RM-Z250'
        off4='KX250'
        street1='XJR400R'
        street2='CB400SF'
        street3='GSX400'
        street4='ZEPHER'
        sport1='YZF-R1'
        sport2='CBR1000RR-R'
        sport3='GSX-R1000/R'
        sport4='Ninja H2R'
      />
    </div>
  )
}

export default Page3
