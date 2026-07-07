DROP POLICY IF EXISTS "temp anon upload media" ON storage.objects;
DROP POLICY IF EXISTS "temp anon update media" ON storage.objects;
CREATE POLICY "temp public upload media" ON storage.objects FOR INSERT TO public WITH CHECK (bucket_id = 'media');
CREATE POLICY "temp public update media" ON storage.objects FOR UPDATE TO public USING (bucket_id = 'media') WITH CHECK (bucket_id = 'media');
CREATE POLICY "temp public delete media" ON storage.objects FOR DELETE TO public USING (bucket_id = 'media');