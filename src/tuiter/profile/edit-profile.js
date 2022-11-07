import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { updateUser } from './profile-reducer';

export function EditProfile () {
  const profile = useSelector(state => state.profile);
  const navigate = useNavigate();
  const [form, setForm] = useState({ ...profile, name: profile.firstName + ' ' + profile.lastName });
  const [editB, setEditB] = useState(false);
  const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let b = new Date(form.dateOfBirth);
  const dispatch = useDispatch();

  const update = () => {

    dispatch(updateUser({
      firstName: form.name.split(' ')[0] || '',
      lastName: form.name.split(' ')[1] || '',
      bio: form.bio,
      website: form.website,
      location: form.location,
      dateOfBirth: form.dateOfBirth,
    }));
    navigate('/tuiter/profile');
  };

  function pad (n) {
    return n >= 10 ? n : '0' + n;
  }

  return (
    <form onSubmit={e => {
      e.preventDefault();
      update();
    }}>
      <div className={'p-3 d-flex align-items-center'}>
        <i className={'bi bi-x-lg me-5 cursor-pointer'} onClick={() => navigate('/tuiter/profile')}></i>
        <div>
          <h4 className={'m-0'}>Edit Profile</h4>
        </div>
        <div className={'flex-1'}/>
        <button type={'submit'} className={'btn btn-dark button-round'}>Save</button>
      </div>
      <div className={'wd-profile'}>
        <img src={`/images/${profile.bannerPicture}`} alt={'banner'} className={'img-fluid'}/>
        <img src={`/images/${profile.profilePicture}`} alt={'profile'} className={'wd-profile-pic'}/>
      </div>
      <div className={'pb-5'}>
        <div className={'group'}>
          <label className={'text-muted'}>Name</label>
          <input onChange={e => setForm({ ...form, name: e.target.value })} required value={form.name}/>
        </div>
        <div className={'group'}>
          <label className={'text-muted'}>Bio</label>
          <textarea onChange={e => setForm({ ...form, bio: e.target.value })} required value={form.bio}></textarea>
        </div>
        <div className={'group'}>
          <label className={'text-muted'}>Location</label>
          <input onChange={e => setForm({ ...form, location: e.target.value })} required value={form.location}/>
        </div>
        <div className={'group'}>
          <label className={'text-muted'}>Website</label>
          <input onChange={e => setForm({ ...form, website: e.target.value })} required value={form.website}/>
        </div>
        {
          editB ? <div className={'group'}>
            <label className={'text-muted'}>Birth Date</label>
            <input onChange={e => setForm({ ...form, dateOfBirth: e.target.value })} required type={'date'}
                   value={`${b.getFullYear()}-${pad(b.getMonth() + 1)}-${pad(b.getDate())}`}/>
          </div> : <div>
            <div>
              <span className={'text-muted'}>Birth date</span>
              <span className={'ms-2'}>&middot;</span>
              <button onClick={() => setEditB(true)} type={'button'} className={'btn btn-link'}>Edit</button>
            </div>
            <div>{month_names[b.getMonth()]} {b.getDate()}, {b.getFullYear()}</div>
          </div>
        }

      </div>
    </form>
  );
}