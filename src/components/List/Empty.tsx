import { ClipboardText } from "@phosphor-icons/react/dist/ssr";

export function Empty() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border-t border-t-gray-400 px-4 py-16 text-gray-300">
      <ClipboardText size={56} />
      <p className="flex flex-col">
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organiza seus itens a fazer
      </p>
    </div>
  );
}
