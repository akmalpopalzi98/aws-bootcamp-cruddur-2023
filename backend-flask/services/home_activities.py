from datetime import datetime, timedelta, timezone
from opentelemetry import trace

from lib.db import pool


class HomeActivities:
  def run():
      now = datetime.now(timezone.utc).astimezone()
      sql = """SELECT * FROM activities"""
      with pool.connection() as conn:
        with conn.cursor() as cur:
          cur.execute(sql)
          # this will return a tuple
          # the first field being the data
          json = cur.fetchall()
      print("-----")
      print(json)
      # return json[0]
