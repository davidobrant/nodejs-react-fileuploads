import { useForm } from "react-hook-form";
import usePosts from "../../hooks/use-posts";
import { childrenProps, postProps } from "../../prop-types";
import { useNavigate, useParams } from "react-router-dom";
import Image from "../generics/image";

const EditPostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { post, edit } = usePosts(id);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    await edit(formData, { onSuccess: () => navigate(-1) });
  };

  if (!post) {
    return null;
  }

  return (
    <PostCardContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center bg-slate-100 shadow-lg p-4 rounded"
      >
        <div>
          <input
            type="text"
            id="title"
            placeholder="title"
            defaultValue={post.title}
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <textarea
            className="whitespace-pre-wrap"
            id="content"
            placeholder="content"
            defaultValue={post.content}
            {...register("content", { required: "Content is required" })}
          />
          {errors.content && <p>{errors.content.message}</p>}
        </div>
        <div className="flex flex-col items-center">
          {post.imageurl && (
            <Image
              src={post.imageurl}
              alt="post"
              shadow
              scale
              className="mb-4 max-w-20"
            />
          )}
          <input type="file" id="image" {...register("image")} />
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className="border border-slate-700 rounded-md px-2 py-.5"
        >
          Update
        </button>
      </form>
    </PostCardContainer>
  );
};

export default EditPostForm;

EditPostForm.propTypes = postProps;

const PostCardContainer = ({ children }) => {
  return <div>{children}</div>;
};

PostCardContainer.propTypes = childrenProps;
