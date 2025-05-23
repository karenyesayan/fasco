export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-xs leading-6.5 font-normal text-[#484848] not-italic sm:text-center">
      Copyright © {currentYear} FASCO . All Rights Reseved.
    </p>
  );
}
