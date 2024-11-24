'use client'
import { Button } from '@mui/material'
import { ProfileDesktopContainer, ProfileImageContainer, ProfileInfoContainer, ProfileUserSettings } from './styles'

const ProfileDesktop = () => {
  return (
    <ProfileDesktopContainer>

	    <ProfileImageContainer>
			<img 
				style={{borderRadius: "50%"}} 
				src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" 
				alt=""
			/>
	    </ProfileImageContainer>

		<ProfileInfoContainer>

	    	<ProfileUserSettings>
	    	    <h1 className="profile-user-name">janedoe_</h1>
	    	    <Button variant='contained'>Editar perfil</Button>
				<Button variant='contained'>Ver archivo</Button>
				<button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
	    	</ProfileUserSettings>

	    <div className="profile-stats">
	        <ul>
	        	<li><span className="profile-stat-count">164</span> posts</li>
	        	<li><span className="profile-stat-count">188</span> followers</li>
	        	<li><span className="profile-stat-count">206</span> following</li>
	        </ul>
	    </div>

	    <div className="profile-bio">
	        <p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
	    </div>
		</ProfileInfoContainer>
	</ProfileDesktopContainer>
  )
}

export default ProfileDesktop