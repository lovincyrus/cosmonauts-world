import posts from '../../data/posts';
import { motion } from 'framer-motion';

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

const Post = () => {
  return (
    <div className="container post">
      <motion.div initial="exit" animate="enter" exit="exit">
        {posts.map((item, index) => (
          <motion.div variants={textVariants}>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

{/* Post.getInitialProps = ({ query }) => {
  let post = posts.find(post => post.id == query.post);

  return {
    post
  };
}; */}

export default Post;
