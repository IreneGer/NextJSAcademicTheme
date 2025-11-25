import Image from 'next/image';

const ProfileImage = (): JSX.Element => {
    
    return (
        <Image
        className="rounded-full select-none"
        src="/images/me.jpeg"
        alt="My profile image"
        width={260}
        height={260}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority // ensures image loads quickly
      />
            
    );
};

export default ProfileImage;
