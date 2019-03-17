import { trigger, query, transition, animate, style, group, animateChild, stagger } from '@angular/animations';

export const change_animation = 
      trigger('changeContents', [
        transition('primary <=> *', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%'
            })
          ]),
          query(':enter', [
            style({ left: '-100%'})
          ]),
          query(':leave', animateChild()),
          group([
            query(':leave', [
              animate('300ms ease-out', style({ left: '100%'}))
            ]),
            query(':enter', [
              animate('300ms ease-out', style({ left: '0%'}))
            ])
          ]),
          query(':enter', animateChild()),
        ])
      ]);

export const listAnimation = 
    trigger('listAnimation', [
        transition('* => *', [
            query(':enter',
            style({ opacity: 0 }), { optional: true }),
            query(':leave', [
            stagger(100, [
                animate('0.3s ease-out', style({ opacity: 0, transform: 'translateY(30px)'}))
            ])
            ], { optional: true }),
            query(':enter', [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            stagger(100, [
                animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
            ])
            ], { optional: true })
        ])
    ]);