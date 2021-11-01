import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <img className={classes.content_img} src="https://www.reisebuerodachau.de/images/layout/slider-02.jpg" alt="China" />
      <div className={classes.description_block}>
        <img alt='avatar' src="https://sun1-20.userapi.com/s/v1/if1/0FZeTjHlzqa60WcRCGKRKkAlnUclSOBc8S21iN7FnQadTKYXk9vPVyQ6vO6gZOLaknvKrlbX.jpg?size=400x0&quality=96&crop=0,160,639,639&ava=1" />
        <div>
          <div>Niky</div>
          <div>Birth date: August 31, 1987</div>
          <div>Hobby: hip-hop</div>
          <div>female</div>
          
          </div>
     
      </div>
    </div>
  )
}
export default ProfileInfo;