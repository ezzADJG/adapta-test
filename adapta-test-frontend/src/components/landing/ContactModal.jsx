import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const ContactModal = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-indigo-500/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Contáctanos</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            ¿Tienes dudas sobre los planes Enterprise? Déjanos un mensaje.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" type="email" placeholder="tu@empresa.com" className="bg-white/50 dark:bg-black/50" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea id="message" placeholder="¿En qué podemos ayudarte?" className="bg-white/50 dark:bg-black/50 min-h-[100px]" />
          </div>
        </div>
        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold">Enviar Mensaje</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
