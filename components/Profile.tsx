
import PromptCard from './PromptCard'


interface ProfileProps {
  name: string;
  desc: string;
  data: any[]; // Adjust the type as per your data structure
  handleEdit: () => void;
  handleDelete: () => void;
}

const Profile: React.FC<ProfileProps> = ({name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'><span className='blue_gradient'>{name} Profile</span></h1>
      <p className='desc text-left'>{desc}</p>
      <div className="mt-10 prompt_layout">
    {data.map((post)=>(<PromptCard key={post._id} post={post} handleEdit={() => handleEdit(post)} handleDelete={() => handleDelete(post)}/>))}
  </div>
    </section>
  )
}

export default Profile