type propTypes = {
  post_id: string;
  post_content: {
    date: string;
    tags: string[];
    postId: number;
    content: string;
    imageUrl: string;
    description: string;
  };
};

export default async function postTile(props: propTypes) {
  return <div className="text-center"></div>;
}
