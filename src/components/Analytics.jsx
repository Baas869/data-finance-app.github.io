import Baas from '../assets/img/baas-award.jpg'
import Button from './share/Button'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[400px] mx-auto my-4' src={Baas} alt="/" />
            <div className='flex flex-col justify-center md:pl-4'>
                <p className='text-[#00DF9A] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae amet deleniti. Neque repellendus unde deserunt placeat voluptatem dolores libero modi excepturi eligendi harum voluptatibus quidem, provident rerum ex odio.</p>
                <Button version='secondary' styles='md:mx-0'>Get Started</Button>
            </div>
        </div>
    </div>
  )
}

export default Analytics