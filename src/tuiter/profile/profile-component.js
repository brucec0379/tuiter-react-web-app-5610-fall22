import { useSelector } from 'react-redux';
import './index.css';
import { useNavigate } from 'react-router';

export function ProfileComponent () {
  const profile = useSelector(state => state.profile);
  const navigate = useNavigate();
  let b = new Date(profile.dateOfBirth);
  let joined = profile.dateJoined.split('/').map(v => parseInt(v));
  const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div>
      <div className={'p-3 d-flex align-items-center'}>
        <i className={'bi bi-arrow-left me-5 cursor-pointer'} onClick={() => navigate('/tuiter/home')}></i>
        <div>
          <h4 className={'m-0'}>{profile.firstName} {profile.lastName}</h4>
          <div className={'mt-1 text-muted'}>6,144 tweets</div>
        </div>
      </div>
      <div className={'wd-profile'}>
        <img src={`/images/${profile.bannerPicture}`} alt={'banner'} className={'img-fluid'}/>
        <img src={`/images/${profile.profilePicture}`} alt={'profile'} className={'wd-profile-pic'}/>
        <button onClick={() => navigate('/tuiter/edit-profile')} type={'button'}
                className={'wd-profile-edit btn btn-outline-dark button-round'}>Edit profile
        </button>
      </div>
      <div className={'pb-5'}>
        <h3 className={'m-0'}><b>{profile.firstName} {profile.lastName}</b></h3>
        <div className={'text-muted'}>{profile.handle}</div>

        <div className={'mt-4'}>{profile.bio}</div>

        <div className={'mt-4 d-flex align-items-center text-muted'}>
          <i className={'bi bi-geo-alt me-2'}></i>
          <div>{profile.location}</div>
          <i className={'bi bi-balloon me-2 ms-4'}></i>
          <div>Born {month_names[b.getMonth()]} {b.getDate()}, {b.getFullYear()}</div>
          <i className={'bi bi-calendar3 me-2 ms-4'}></i>
          <div>Joined {month_names[joined[0] - 1]} {joined[1]}</div>
        </div>

        <div className={'mt-4 d-flex align-items-center'}>
          <b>{profile.followingCount}</b>
          <div className={'text-muted me-4 ms-2'}>Following</div>
          <b>{profile.followersCount}</b>
          <div className={'text-muted me-4 ms-2'}>Followers</div>
        </div>
      </div>
    </div>
  );
}