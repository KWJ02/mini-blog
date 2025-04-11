import Header from 'components/header';
import Textarea from 'components/textarea';

const NewPost = () => {
	return (
		<>
			<Header
				value='Mini'
				backBtn={true}
				icon={true}
			/>
			<Textarea />
		</>
	);
};

export default NewPost;
