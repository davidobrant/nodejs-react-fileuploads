import { useForm } from "react-hook-form";
import usePosts from "../../hooks/use-posts";

const NewPostForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const { create } = usePosts();

  const onSubmit = async (data) => {
    
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("image", data.image[0]);

    await create(formData, {
      onSuccess: () => reset(),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            {...register("content", { required: "Content is required" })}
          />
          {errors.content && <p>{errors.content.message}</p>}
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" {...register("image")} />
        </div>
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default NewPostForm;
