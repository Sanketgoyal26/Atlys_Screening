import Popup from '../Popup'
import Shape from '../images/Shape.png';

const Auth = () => {
  return (
    <div className='relative flex flex-col items-center'>
      <div className='absolute top-0 mt-28'>
        <img src={Shape} className='h-[32.46px] w-[31.7px]'/>
      </div>
      <div className="flex flex-col items-center justify-center px-4">
        <div className='mt-10'>
          <Popup />
        </div>
      </div>
    </div>
  );
}

export default Auth;
