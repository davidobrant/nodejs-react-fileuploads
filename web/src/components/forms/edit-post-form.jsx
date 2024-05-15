import { useForm } from "react-hook-form";
import usePosts from "../../hooks/use-posts";
import { postProps } from "../../PropTypes";
import { useParams } from "react-router-dom";

const EditPostForm = () => {
  const { id } = useParams();
  const { post, edit } = usePosts(id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    await edit(formData, {
      onSuccess: () => reset(),
    });
  };

  if (!post) {
    return null;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center"
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
            id="content"
            placeholder="content"
            defaultValue={post.content}
            {...register("content", { required: "Content is required" })}
          />
          {errors.content && <p>{errors.content.message}</p>}
        </div>
        <div className="flex flex-col items-center">
          {post.imageurl && (
            <img
              src={post.imageurl}
              alt="post"
              style={{ maxWidth: "100px" }}
              className="mb-4"
            />
          )}
          <input type="file" id="image" {...register("image")} />
        </div>
        <button
          type="submit"
        //   disabled={!isValid}
          className="border border-slate-700 rounded-md px-2 py-.5 cursor-pointer"
        >
          Save
        </button>
      </form>
    </>
  );
};

export default EditPostForm;

EditPostForm.propTypes = postProps;
