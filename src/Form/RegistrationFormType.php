<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Email;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstName', TextType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => true,
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter your full name',
                    ]),
                    new Length([
                        'min' => 3,
                        'minMessage' => 'Your full name should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 50,
                    ]),
                ],
            ])
            ->add('lastName', TextType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => true,
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter your last name',
                    ]),
                    new Length([
                        'min' => 3,
                        'minMessage' => 'Your full name should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 50,
                    ]),
                ],
            ])
            ->add('email', EmailType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => true,
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter your email address',
                    ]),
                    new Email([
                        'message' => 'Invalid email address',
                        'mode' => 'strict',
                    ]),
                ],
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new IsTrue([
                        'message' => 'You should agree to our terms.',
                    ]),
                ],
            ])
            ->add('plainPassword', PasswordType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
                'required' => false,
                'attr' => ['autocomplete' => 'new-password'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ]),
                    new Length([
                        'min' => 8,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
