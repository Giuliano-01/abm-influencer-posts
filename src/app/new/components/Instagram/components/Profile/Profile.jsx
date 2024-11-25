'use client'
import { Button } from '@mui/material'
import { ProfileBio, ProfileContainer, ProfileImageContainer, ProfileInfoContainer, ProfileStats, ProfileUserSettings } from './styles'

const Profile = () => {
  return (
    <ProfileContainer>

	    <ProfileImageContainer>
			<img 
				style={{borderRadius: "50%"}} 
				src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" 
				alt=""
			/>
	    </ProfileImageContainer>

		<ProfileInfoContainer>

	    	<ProfileUserSettings>
	    	    <h1>janedoe_</h1>
	    	    <Button 
					variant='contained'
				>
					Editar perfil
				</Button>
				<Button variant='contained'>Ver archivo</Button>
				<button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
	    	</ProfileUserSettings>

	        <ProfileStats>
	        	<li><span className="profile-stat-count">164</span> posts</li>
	        	<li><span className="profile-stat-count">188</span> followers</li>
	        	<li><span className="profile-stat-count">206</span> following</li>
	        </ProfileStats>

			<ProfileBio>
				<pre>
					<span className="profile-real-name">Jane Doe</span><br/>
					┏━━━━━━━━━━━━━━━━━━━━━━━━━┓<br/>
					━📍 Bs As. Argentina<br/>
					━📚 Enamorado de UBA, conociendo UAI<br/>
					━👨‍💻Programando una vida mejor<br/>
				</pre>
			</ProfileBio>

		</ProfileInfoContainer>
		
	</ProfileContainer>
  )
}

export default Profile