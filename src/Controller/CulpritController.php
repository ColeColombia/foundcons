<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CulpritController extends AbstractController
{
     /**
     * @Route("/culprit", name="app_culprit", options={"expose"=true})
     */
    public function index(): Response
    {
        return $this->render('culprit/index.html.twig', [
            'controller_name' => 'CulpritController',
        ]);
    }
}
