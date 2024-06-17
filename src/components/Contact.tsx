'use client'
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { submitContactForm, ContactFormState } from "@/actions/contact"

export default function Component() {
  const initialState : ContactFormState = {
    status: 'idle',
  }
  const [formState, formDispatch] = useFormState(submitContactForm, initialState)
  const { toast } = useToast()

  useEffect(() => {
    if (formState.status === 'success') {
      toast({
        title: "送信に成功しました",
        description: "お問い合わせありがとうございました。3営業日以内に返答いたします。",
      })
    }
    if (formState.status === 'error') {
      toast({
        title: "送信に失敗しました",
        description: "入力内容を確認して下さい",
        variant: "destructive",
      })
    }
  }, [formState,toast])

  return (
    <section id="contact">
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight underline decoration-primary decoration-1 underline-offset-8">お問い合わせ</h2>
          <p className="text-muted-foreground">
              ご質問や相談事があれば、気軽にお問い合わせください。
          </p>
        </div>
        <form className="mx-auto max-w-xl space-y-4" action={formDispatch} noValidate>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">お名前</Label>
              <Input id="name" name="name" placeholder="名前を入力" />
              {formState.status === 'error' && formState.fieldErrors.name && (
                <div className="text-destructive">{formState.fieldErrors.name}</div>
              )}              
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input id="email" name="email" placeholder="メールアドレスを入力" type="email" />
              {formState.status === 'error' && formState.fieldErrors.email && (
                <div className="text-destructive">{formState.fieldErrors.email}</div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">メッセージ</Label>
            <Textarea className="min-h-[120px]" id="message" name="message" placeholder="メッセージを入力" />
            {formState.status === 'error' && formState.fieldErrors.message && (
              <div className="text-destructive">{formState.fieldErrors.message}</div>
            )}
          </div>
          <Button className="w-full font-bold" type="submit">
              送信
          </Button>
        </form>
      </div>
    </section>
  )
}