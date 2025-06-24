const MyHeadingStyle1 = ({ title }: { title: string }) => {
  return (
    <h2 className="relative my-5 inline-block text-center text-2xl tracking-wide text-foreground after:absolute after:left-0 after:-bottom-2 after:rounded-full after:h-1 after:w-full after:origin-left after:scale-x-50 after:bg-yellow-400 after:transition-transform after:duration-300 hover:after:scale-x-100 md:text-2xl lg:text-3xl">
      {title}
    </h2>
  );
};

export default MyHeadingStyle1;
