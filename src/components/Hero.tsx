"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 lg:gap-24">
            <motion.div
                animate={{ opacity: 1 }}
                transition={{ duration: 5 }}
                initial={{ opacity: 0 }}
                className="flex flex-col gap-4 lg:gap-8 items-center justify-center text-center lg:text-left lg:items-start"
            >
                <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance md:-mb-4">
                    ビジネスの速度を
                    <span className="inline-block bg-foreground mx-1 px-2 -rotate-1">
                        <span className="inline-block text-background rotate-1">
                            限界突破
                        </span>
                    </span>
                    をせよ
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    私たちは、最新テクノロジーとイノベーションで、お客様の業務効率を爆速化します。
                </p>
                <Button size="lg">
                    <a href="#contact" className="primary-foreground font-bold">
                        お問い合わせ
                    </a>
                </Button>
            </motion.div>
            <div className="lg:w-full">
                <Image
                    src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                    alt="Hero画像"
                    className="w-full"
                    priority={true}
                    width={640}
                    height={480}
                />
            </div>
        </section>
    );
};

export default Hero;
