INSERT INTO public.users (display_name, email, handle, cognito_user_id)
VALUES
  ('tester','akmalpopalzi.eng@gmail.com', 'tester2024' ,'MOCK'),
  ('Akmal Popalzi','popam004.310@gmail.com','akmalpop' ,'MOCK');

INSERT INTO public.activities (user_uuid, message, expires_at)
VALUES
  (
    (SELECT uuid from public.users WHERE users.handle = 'tester2024' LIMIT 1),
    'This was imported as seed data!',
    current_timestamp + interval '10 day'
  )