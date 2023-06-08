import {Link} from 'react-router-dom'

function SubMenu({url, icon, title, description, isActive}) {
  return(
    <>
      {isActive ? (
        <div className='w-[259px] h-10'>
          <Link to={url} className="flex items-center w-full h-full">
            <img src={icon} alt={title} className='w-15 h-15'/>
            <div className="ml-5 text-text-300">
              <h3 className="font-sans font-semibold text-[14px]">{title}</h3>
              <p className="font-sans font-normal text-[12px]">{description}</p>
            </div>
          </Link>
        </div>
      ) : (
      <div className='w-[259px] h-10'>
        <Link to={url} className="flex items-center w-full h-full">
          <img src={icon} alt={title} className='w-15 h-15'/>
          <div className="ml-5 text-text-200">
            <h3 className="font-sans font-semibold text-[14px]">{title}</h3>
            <p className="font-sans font-normal text-[12px]">{description}</p>
          </div>
        </Link>
      </div>

      )}
    </>
  )
}

export default SubMenu