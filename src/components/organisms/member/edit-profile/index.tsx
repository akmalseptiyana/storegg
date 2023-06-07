import { EditProfileForm } from "./form";

export function EditProfileContent() {
  return (
    <main className="relative ml-[340px] mr-auto h-full py-[50px] pr-[50px]">
      <div className="lg:pl-0">
        <h2 className="mb-[30px] text-[32px] font-bold text-dark-blue">
          Settings
        </h2>
        <div className="max-w-[590px] rounded-2xl bg-white p-[30px]">
          <EditProfileForm />
        </div>
      </div>
    </main>
  );
}
